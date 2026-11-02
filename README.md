# Aplikasi Penjualan Buku Berbasis Web — Toko Buku Anelinda Books

> *"Sahabat Kolektor sejak 1998, dari buku terbaru sampai buku antik"*

Repositori monorepo aplikasi web **Toko Buku Anelinda Books** (`anelinda.com`), terdiri dari aplikasi etalase publik pelanggan (`frontend_user`) dan panel administrasi toko (`frontend_admin`).

---

## 1. Struktur Proyek

```text
anelinda-books/
├── docker-compose.yml    # Orkestrasi Docker Compose (frontend_user + frontend_admin)
├── frontend_user/        # Aplikasi Pelanggan / Etalase Publik (Port 3000)
│   ├── Dockerfile        # Multi-stage Docker (deps, development, builder, production)
│   ├── .env.example      # Contoh variabel environment frontend_user
│   └── src/              # Source code React + TanStack Router + Tailwind CSS
├── frontend_admin/       # Aplikasi Dashboard Admin & Owner (Port 3001)
│   ├── Dockerfile        # Multi-stage Docker (deps, development, builder, production)
│   ├── .env.example      # Contoh variabel environment frontend_admin
│   └── src/              # Source code React + TanStack Router + TanStack Table
├── assets/               # Aset master desain (font, ikon, logo, fotografi)
├── docs/                 # Dokumentasi spesifikasi (PRD, Architecture, API Contract, Design)
└── AGENTS.md             # Standar arsitektur, keamanan, dan kualitas kode
```

---

## 2. Prasyarat (Prerequisites)

Pastikan perangkat Anda telah terinstal:

- **Node.js** `v22.x` (LTS) atau minimal `v20.x`
- **npm** (bawaan Node.js) atau **pnpm** (`corepack enable`)
- **Docker** `v24+` (opsional, jika ingin menjalankan aplikasi melalui container)

---

## 3. Cara Menjalankan secara Lokal (Development)

Anda dapat menjalankan `frontend_user` dan `frontend_admin` secara bersamaan di dua terminal terpisah.

### 3.1 Menjalankan `frontend_user` (Etalase Publik — Port `3000`)

1. Buka terminal dan masuk ke direktori `frontend_user`:
   ```bash
   cd frontend_user
   ```
2. Salin konfigurasi environment (opsional):
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env

   # macOS / Linux / Git Bash
   cp .env.example .env
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan (Vite HMR):
   ```bash
   npm run dev
   ```
5. Buka di browser: **[http://localhost:3000](http://localhost:3000)**

---

### 3.2 Menjalankan `frontend_admin` (Dashboard Admin & Owner — Port `3001`)

1. Buka terminal baru dan masuk ke direktori `frontend_admin`:
   ```bash
   cd frontend_admin
   ```
2. Salin konfigurasi environment (opsional):
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env

   # macOS / Linux / Git Bash
   cp .env.example .env
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. Jalankan server pengembangan (Vite HMR):
   ```bash
   npm run dev
   ```
5. Buka di browser: **[http://localhost:3001](http://localhost:3001)**

---

### 3.3 Perintah NPM/PNPM yang Tersedia

Jalankan perintah berikut di dalam folder `frontend_user` maupun `frontend_admin`:

| Perintah | Keterangan |
|---|---|
| `npm run dev` | Menjalankan server development dengan Hot Module Replacement (`3000` untuk user, `3001` untuk admin) |
| `npm run typecheck` | Memvalidasi tipe TypeScript secara ketat (`tsc --noEmit`) |
| `npm run build` | Menjalankan `tsc --noEmit` lalu mem-bundle aplikasi ke folder `dist/` untuk production |
| `npm run preview` | Menjalankan pratinjau hasil build `dist/` secara lokal |
| `npm run gen:api` | Meng-generate klien TypeScript dari spesifikasi OpenAPI (`orval`) |

---

## 4. Cara Menjalankan Menggunakan Docker & Docker Compose

Kedua aplikasi telah dilengkapi [`docker-compose.yml`](docker-compose.yml), [`frontend_user/Dockerfile`](frontend_user/Dockerfile), dan [`frontend_admin/Dockerfile`](frontend_admin/Dockerfile) *multi-stage* berbasis `node:22-alpine`.

### 4.1 Cara Tercepat dengan Docker Compose (Setelah `git clone`)

Cukup jalankan perintah berikut dari root direktori proyek setelah melakukan `git clone`:

```bash
# 1. Build & jalankan kedua aplikasi (frontend_user + frontend_admin) di background
docker compose up -d --build

# 2. Cek status container & healthcheck
docker compose ps

# 3. Lihat log aplikasi secara real-time (opsional)
docker compose logs -f
```

Setelah container berstatus `Up (healthy)`, buka di browser:
- **Etalase Publik (`frontend_user`)**: **[http://localhost:3000](http://localhost:3000)** (Healthcheck: `http://localhost:3000/healthz`)
- **Dashboard Admin (`frontend_admin`)**: **[http://localhost:3001](http://localhost:3001)** (Healthcheck: `http://localhost:3001/healthz`)

Untuk menghentikan container:
```bash
docker compose down
```

Jika ingin menjalankan **mode development (Vite HMR / live reload)** melalui Docker Compose:
```bash
# Pastikan container production dihentikan terlebih dahulu agar port 3000 & 3001 tidak bentrok
docker compose down

# Jalankan service development dengan profile "dev"
docker compose --profile dev up --build frontend_user_dev frontend_admin_dev
```

---

### 4.2 Build & Run Manual per Container (Mode Production)

#### A. `frontend_user` (Port `3000`)
```bash
# 1. Build image production (dari root repositori)
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:8080/api/v1 \
  -t anelinda/frontend-user:latest \
  ./frontend_user

# 2. Jalankan container
docker run -d \
  --name anelinda-frontend-user \
  -p 3000:3000 \
  anelinda/frontend-user:latest
```
- Aplikasi dapat diakses di: **[http://localhost:3000](http://localhost:3000)**
- Healthcheck endpoint: **[http://localhost:3000/healthz](http://localhost:3000/healthz)**

#### B. `frontend_admin` (Port `3001`)
```bash
# 1. Build image production (dari root repositori)
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:8080/api/v1 \
  -t anelinda/frontend-admin:latest \
  ./frontend_admin

# 2. Jalankan container
docker run -d \
  --name anelinda-frontend-admin \
  -p 3001:3001 \
  anelinda/frontend-admin:latest
```
- Aplikasi dapat diakses di: **[http://localhost:3001](http://localhost:3001)**
- Healthcheck endpoint: **[http://localhost:3001/healthz](http://localhost:3001/healthz)**

#### C. Menghentikan & Menghapus Container Manual
```bash
docker rm -f anelinda-frontend-user anelinda-frontend-admin
```

---

### 4.3 Mode Development Manual via Docker (`--target development`)

Jika ingin menjalankan mode pengembangan (Vite HMR) per container secara manual:

```bash
# Build & jalankan frontend_user (stage development)
docker build --target development -t anelinda/frontend-user:dev ./frontend_user
docker run --rm -p 3000:3000 anelinda/frontend-user:dev

# Build & jalankan frontend_admin (stage development)
docker build --target development -t anelinda/frontend-admin:dev ./frontend_admin
docker run --rm -p 3001:3001 anelinda/frontend-admin:dev
```

---

## 5. Daftar Rute Aplikasi

### 5.1 `frontend_user` (`http://localhost:3000`)
| Path | Halaman |
|---|---|
| `/` | Beranda (Hero, Pilihan Pembaca/Terlaris, Koleksi Pilihan, Tentang Kami, Testimoni, FAQ, Berita) |
| `/koleksi` | Katalog Koleksi Buku Anelinda (Filter Jenis Produk, Penulis, Urutkan, Pencarian) |
| `/koleksi/$slug` | Detail Buku (Galeri Sampul, Sinopsis, Detail Buku, Pesan & Keranjang) |
| `/checkout` | Checkout Pesanan & Redirect ke WhatsApp (`wa.me`) |
| `/berita` | Daftar Kabar Terbaru dari Anelinda Books |
| `/berita/$slug` | Detail Artikel Berita |
| `/request-buku` | Formulir Request Buku Langka/Kolektor |

### 5.2 `frontend_admin` (`http://localhost:3001`)
| Path | Halaman |
|---|---|
| `/login` | Halaman Masuk Admin & Owner |
| `/` | Halaman Utama Dashboard (Ringkasan KPI, Pesanan Terbaru, Stok Menipis) |
| `/buku` | Manajemen Katalog & Stok Buku (Tabel, Tambah/Edit Buku, Panel Detail Buku) |
| `/pesanan` | Manajemen Pesanan & Konfirmasi Pembayaran |
| `/request-buku` | Daftar & Tindak Lanjut Request Buku Pelanggan |
| `/akun` | Manajemen Akun Admin |
| `/ubah-isi-website` | Pengaturan Identitas Toko & Carousel Banner Website |
