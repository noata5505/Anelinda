# Figma Custom Font Files (`frontend_user`)

Proyek Figma **Public-Dekstop** menggunakan 3 keluarga font:

1. **`Inter`** (`Regular 400`, `Medium 500`, `Bold 700`) — sudah dimuat otomatis dari Google Fonts di `index.html`.
2. **`Linear Sans Trial`** (`Regular`, `Italic`, `Semi Bold` — oleh *Gradient Type Foundry*) — font komersial/trial.
3. **`Test Tiempos Headline`** (`Light Italic` — oleh *Klim Type Foundry*) — font komersial/trial.

## Cara Kerja Font di Kode (`globals.css` & `tokens.css`)
- Seluruh elemen di kode menggunakan nama class persis dari Figma (`font-['Linear_Sans_Trial:Regular']`, `font-['Test_Tiempos_Headline:Light_Italic']`, `font-['Inter:Regular']`).
- `@font-face` di `src/styles/globals.css` akan:
  1. Mengecek apakah font `Linear Sans Trial` & `Test Tiempos Headline` ter-install di sistem operasi lokal (`local(...)`).
  2. Jika belum ter-install di OS, memuat file `.woff2` / `.otf` dari folder `/assets/fonts/` ini:
     - `LinearSansTrial-Regular.woff2` / `.otf`
     - `LinearSansTrial-Italic.woff2` / `.otf`
     - `LinearSansTrial-SemiBold.woff2` / `.otf`
     - `TestTiemposHeadline-LightItalic.woff2` / `.otf`
  3. Jika file font komersial/trial tersebut belum ditaruh di folder ini, otomatis menggunakan fallback terdekat dari Google Fonts (`Plus Jakarta Sans` untuk `Linear Sans Trial`, dan `Newsreader Light Italic` untuk `Test Tiempos Headline`).
