# AGENTS.md — Aturan Wajib untuk AI Coding Agent

> Proyek: **Aplikasi Penjualan Buku Berbasis Web — Toko Buku Anelinda Books** (*"Sahabat Kolektor sejak 1998"*)
> Tipe repo: **Monorepo Golang (backend) + TypeScript (frontend)**
> Status dokumen: **NORMATIF**. Semua aturan bertanda **WAJIB / DILARANG** tidak boleh dilanggar tanpa persetujuan tertulis pengguna.

---

## 0. Urutan Baca Dokumen (Source of Truth)

Sebelum menulis kode apa pun, baca dokumen berikut sesuai urutan. Jika terjadi konflik, dokumen dengan nomor lebih kecil menang **kecuali** untuk skema & endpoint, di mana `api-contract.md` adalah acuan tunggal.

| # | Dokumen | Fungsi |
|---|---------|--------|
| 1 | `AGENTS.md` (file ini) | Aturan arsitektur, keamanan, dan kualitas kode |
| 2 | [`docs/prd.md`](docs/prd.md) | Kebutuhan produk, aktor, alur bisnis |
| 3 | [`docs/architecture.md`](docs/architecture.md) | Struktur monorepo, layer, search engine, konkurensi, deployment |
| 4 | [`docs/api-contract.md`](docs/api-contract.md) | **Acuan tunggal** DDL PostgreSQL, format WhatsApp link, kontrak REST API |
| 5 | [`docs/design.md`](docs/design.md) | Design system (diisi dari Figma — jangan mengarang token desain) |

Setiap perubahan skema DB atau endpoint **WAJIB** diperbarui lebih dulu di `docs/api-contract.md` dan `backend/api/openapi.yaml`, baru kemudian kode.

---

## 1. Bahasa Domain (Ubiquitous Language) — WAJIB

Gunakan istilah berikut secara konsisten di nama modul, tabel, enum, endpoint, dan label UI.

| Istilah Domain | Identifier Kode | Keterangan |
|---|---|---|
| Pelanggan | `customer`, role `PELANGGAN` | Pembeli publik/terdaftar |
| Admin | role `ADMIN` | Pengelola operasional toko |
| Owner | role `OWNER` | Pemilik toko (Bapak Anton Utomo) |
| WhatsApp (Sistem Eksternal) | `whatsapp` | Deep-link `wa.me` |
| Buku / Katalog Buku | `book`, `books` | Produk |
| Kategori | `category`, `categories` | |
| Pesanan | `order`, `orders`, `order_items` | |
| Potong Stok | `stock_movements.type = 'OUT_ORDER_PAID'` | Hanya terjadi saat `DIBAYAR` |
| Laporan Penjualan | `report` | Fitur Owner |
| Kelola Akun Admin | `owner/admins` | Fitur Owner |

**Status Pesanan (enum `order_status`) — tidak boleh ditambah/diubah tanpa update kontrak:**

```
MENUNGGU_PEMBAYARAN ──(Konfirmasi Pembayaran)──► DIBAYAR ──(Input Resi)──► SELESAI
        │
        └──(Batal / Kedaluwarsa)──► BATAL   (stok fisik TIDAK berkurang)
```

Transisi lain (mis. `DIBAYAR → BATAL`, `SELESAI → *`) **DILARANG** pada fase MVP dan harus ditolak dengan `409 INVALID_STATE_TRANSITION`.

---

## 2. Tech Stack Utama

### 2.1 Backend (`backend/`)
| Aspek | Pilihan Wajib |
|---|---|
| Bahasa | Go **1.23+** |
| HTTP Router | **Chi v5** (`net/http` compatible). Fiber hanya boleh dipakai jika pengguna memutuskan lain. |
| Database | PostgreSQL **16** |
| Driver | `github.com/jackc/pgx/v5` + `pgxpool` |
| Query statis | `sqlc` (engine `postgresql`, `sql_package: pgx/v5`) |
| Query dinamis | `github.com/Masterminds/squirrel` dengan `PlaceholderFormat(sq.Dollar)` |
| Migrasi | `pressly/goose` atau `golang-migrate` (file di `backend/db/migrations`) |
| Pencarian | PostgreSQL Full-Text Search (`tsvector`, config `simple`/`indonesian`/`english`) + `pg_trgm` |
| Validasi | `github.com/go-playground/validator/v10` |
| Sanitasi HTML | `github.com/microcosm-cc/bluemonday` |
| Uang | `int64` (Rupiah penuh). `shopspring/decimal` hanya untuk kalkulasi turunan (mis. konversi kurs informatif) |
| Auth | JWT (`golang-jwt/jwt/v5`) + refresh token httpOnly cookie, password hash **argon2id** |
| Logging | `log/slog` (JSON) |
| Config | Environment variable (12-factor), divalidasi saat startup |

### 2.2 Bridge Kontrak API
- Spesifikasi tunggal: `backend/api/openapi.yaml` (**OpenAPI 3.0.3**).
- TypeScript client di-generate otomatis ke `frontend/src/api/generated/` menggunakan **Orval** (mode `react-query` + `zod`). `openapi-typescript` boleh sebagai alternatif tipe saja.
- **DILARANG** mengedit file di `src/api/generated/` secara manual. Jalankan `pnpm gen:api`.
- CI wajib gagal jika hasil generate berbeda dari yang di-commit (`git diff --exit-code`).

### 2.3 Frontend (`frontend/`)
| Aspek | Pilihan Wajib |
|---|---|
| Bahasa | TypeScript (`strict: true`, `noUncheckedIndexedAccess: true`) |
| SSR Framework | **TanStack Start** (default) — alternatif yang disetujui: React Router v7 (framework mode) |
| Server state | TanStack Query |
| Client state | Zustand (hanya UI state & sesi ringan — **bukan** cache data server) |
| Styling | Tailwind CSS + Shadcn UI (token dari `docs/design.md`) |
| Form | React Hook Form + Zod (schema dari Orval bila tersedia) |
| i18n | Dwi-bahasa **ID (default)** / **EN** |
| Package manager | `pnpm` |

---

## 3. Aturan Keamanan Mutlak (Zero-Trust Rules)

### 3.1 Anti-SQL Injection — DILARANG KERAS
- **DILARANG** membangun SQL dengan `fmt.Sprintf`, `+`, `strings.Builder`, atau template string dengan nilai input.
- **WAJIB** parameterized query (`$1`, `$2`, …) via `sqlc` atau `squirrel`.
- Nama kolom untuk `ORDER BY` dinamis **WAJIB** diambil dari *allowlist* map (`map[string]string{"price_asc": "price_idr ASC", ...}`), tidak pernah dari input mentah.

```go
// ❌ DILARANG
q := fmt.Sprintf("SELECT * FROM books WHERE title ILIKE '%%%s%%'", input)

// ✅ BENAR
q, args, err := sq.Select("id", "title").From("books").
    Where(sq.ILike{"title": "%" + input + "%"}).
    PlaceholderFormat(sq.Dollar).ToSql()
```

### 3.2 Keamanan Finansial
- **DILARANG** `float32`/`float64` untuk harga, subtotal, total, omzet — di Go, SQL, maupun JSON.
- **WAJIB** `int64` (Go) ↔ `BIGINT` (PostgreSQL) ↔ `integer` (JSON, Rupiah penuh, tanpa desimal). Nama field diakhiri `_idr`.
- Total pesanan **WAJIB** dihitung ulang di backend dari harga DB; **DILARANG** mempercayai harga/total dari klien.
- Di frontend, harga diformat dengan `Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })` dan tidak pernah dioperasikan aritmetika floating.

### 3.3 Anti-Race Condition Stok Buku
Saat **Konfirmasi Pembayaran** (`MENUNGGU_PEMBAYARAN → DIBAYAR`), **Checkout**, dan **Batal**:
1. **WAJIB** dalam satu transaksi ACID `pgx.Tx`.
2. **WAJIB** `defer tx.Rollback(ctx)` segera setelah `Begin` (aman dipanggil setelah `Commit`).
3. **WAJIB** `SELECT ... FOR UPDATE` pada baris `orders` lalu baris `books` terkait, **diurutkan berdasarkan `books.id ASC`** untuk mencegah deadlock.
4. **WAJIB** validasi `stock >= quantity` di dalam transaksi; jika gagal → rollback, `409 INSUFFICIENT_STOCK`.
5. **WAJIB** mencatat `stock_movements` untuk setiap perubahan stok dalam transaksi yang sama.
6. Constraint DB `CHECK (stock >= 0)` dan `CHECK (reserved_stock >= 0 AND reserved_stock <= stock)` adalah jaring pengaman terakhir — **bukan** pengganti penguncian.

```go
tx, err := r.pool.BeginTx(ctx, pgx.TxOptions{IsoLevel: pgx.ReadCommitted})
if err != nil { return fmt.Errorf("begin tx: %w", err) }
defer func() { _ = tx.Rollback(ctx) }() // satu-satunya pengecualian aturan "_" — rollback setelah commit selalu ErrTxClosed

qtx := r.q.WithTx(tx)
order, err := qtx.GetOrderForUpdate(ctx, orderID)   // SELECT ... FOR UPDATE
// ... lock books ORDER BY id, validasi, potong stok, insert stock_movements, update status
return tx.Commit(ctx)
```

> Pengecualian tunggal penggunaan `_ =` adalah `tx.Rollback` di dalam `defer` (lihat §3.6). Alternatif yang lebih eksplisit: cek `errors.Is(err, pgx.ErrTxClosed)` lalu log error lain.

### 3.4 Validasi Payload & Anti-XSS
- Semua body JSON **WAJIB** di-decode dengan `json.Decoder` + `DisallowUnknownFields()` + batas ukuran `http.MaxBytesReader` (default 1 MB; upload gambar maks 5 MB, hanya `image/jpeg|png|webp`, dicek dengan magic bytes `http.DetectContentType`).
- Semua DTO **WAJIB** memiliki tag `validate:"..."` dan divalidasi `validator/v10` sebelum masuk usecase.
- Field teks kaya (`description`, `notes`) **WAJIB** disanitasi `bluemonday.UGCPolicy()`; field teks biasa (judul, nama, alamat) **WAJIB** `bluemonday.StrictPolicy()`.
- Frontend **DILARANG** memakai `dangerouslySetInnerHTML` kecuali konten sudah disanitasi server **dan** diberi komentar justifikasi.
- Query param di-parse dengan tipe ketat; `limit` maks 100.

### 3.5 Autentikasi & Otorisasi
- RBAC via middleware: `RequireRole("ADMIN","OWNER")` untuk `/api/v1/admin/*`, `RequireRole("OWNER")` untuk `/api/v1/owner/*`.
- Pemeriksaan kepemilikan resource (Pelanggan hanya melihat pesanannya sendiri) **WAJIB** di usecase/query (`WHERE customer_id = $1`), bukan hanya di UI.
- Akun Admin berstatus nonaktif **WAJIB** ditolak saat login **dan** saat refresh token.
- Password: argon2id, minimal 8 karakter. **DILARANG** log password, token, atau hash.
- Rate limit login & checkout per IP (mis. `httprate` 10 req/menit).
- CORS allowlist eksplisit (`https://www.anelinda.com`), cookie `Secure; HttpOnly; SameSite=Lax`.
- Secret hanya dari env; **DILARANG** commit `.env` (sediakan `.env.example`).

### 3.6 Kualitas Kode Go
- **DILARANG** mengabaikan error dengan `_` (kecuali `defer tx.Rollback` sesuai §3.3). Bungkus error dengan konteks: `fmt.Errorf("confirm payment: %w", err)`.
- **DILARANG** `panic()` di handler, usecase, repository. Middleware `Recoverer` tetap dipasang sebagai pertahanan terakhir.
- Semua fungsi I/O menerima `context.Context` sebagai parameter pertama.
- `rows.Close()` **WAJIB** (dicek `sqlclosecheck`).
- Domain error memakai sentinel (`domain.ErrInsufficientStock`, `domain.ErrNotFound`, `domain.ErrInvalidStateTransition`) dan dipetakan ke HTTP di layer delivery saja.
- **WAJIB lolos** sebelum commit/PR:
  ```bash
  go vet ./...
  golangci-lint run   # linters aktif minimal: gosec, errcheck, sqlclosecheck, govet, staticcheck, ineffassign, bodyclose, rowserrcheck, revive
  go test -race ./...
  ```

### 3.7 Kualitas Kode TypeScript
- `tsc --noEmit`, `eslint` (`@typescript-eslint/strict`), `prettier --check` **WAJIB** lolos.
- **DILARANG** `any` (gunakan `unknown` + narrowing). **DILARANG** `// @ts-ignore` (gunakan `@ts-expect-error` + alasan).
- Semua respons API divalidasi lewat tipe hasil generate Orval; jangan menulis tipe API manual.

---

## 4. Konvensi Arsitektur

- Backend: **Clean Architecture** — `delivery (http) → usecase → repository → domain`. Dependensi hanya mengarah ke dalam. `domain` tidak boleh mengimpor paket lain dalam proyek.
- Setiap modul (`internal/module/<nama>`) berisi `handler.go`, `usecase.go`, `repository.go`, `dto.go`, `*_test.go`.
- Interface didefinisikan di sisi **konsumen** (usecase mendefinisikan interface repository yang dibutuhkannya).
- Format respons API standar: `{ "data": ..., "meta": ... }` dan error `{ "error": { "code", "message", "details" } }` (lihat `api-contract.md` §4).
- Waktu disimpan `TIMESTAMPTZ` (UTC), ditampilkan di zona `Asia/Jakarta` untuk UI Indonesia.
- Identifier primer: `UUID` (`gen_random_uuid()`); kode yang tampil ke manusia: `order_code` (`INV-AB-YYYYMMDD-NNNN`).

## 5. Workflow Agent

1. Baca dokumen §0. Jika ada ambiguitas bisnis → **tanya pengguna**, jangan berasumsi.
2. Ubah kontrak (`api-contract.md` + `openapi.yaml`) → migrasi SQL → `sqlc generate` → usecase + test → handler → `pnpm gen:api` → UI.
3. **DILARANG** mengarang token desain (warna/font/spacing). Jika `docs/design.md` masih `[WAITING FOR FIGMA DESIGN SYSTEM]`, gunakan default Shadcn netral dan tandai `// TODO(design)`.
4. Operasi destruktif (drop tabel, hapus data produksi, reset migrasi) **WAJIB** konfirmasi pengguna.
5. Commit mengikuti Conventional Commits (`feat(order): ...`, `fix(stock): ...`).
