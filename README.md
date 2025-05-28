# Website Portfolio Keren Pakai Next.js 🚀
Website portfolio kece buat Kalian. Dibuat pakai Next.js, React, dan Tailwind CSS.

![image](https://github.com/user-attachments/assets/c1a694d1-0aeb-438a-8f51-f5cc313c9bb3)
![image](https://github.com/user-attachments/assets/31a2d151-9654-4a55-8504-69f8901497a0)
![image](https://github.com/user-attachments/assets/aea9a5e0-5758-4e62-b1ff-c29c59d63b82)


## Apa Sih Ini? 🤔

Website ini buat nampilkan karya-karya, kemampuan, pendidikan, pengalaman kerja, tulisan blog, dan info pribadi. Tampilannya modern dengan fitur mode gelap, animasi keren, dan bisa dibuka di HP atau laptop.

## Fitur-Fitur Keren ✨

- **Tampilan Responsive**: Bisa dibuka di HP, tablet, atau laptop, tetap cakep!
- **Mode Gelap/Terang**: Bisa ganti tampilan sesuai selera atau kondisi mata
- **Animasi Smooth**: Efek gerak yang bikin website jadi hidup
- **Banyak Bagian**: Ada About, Portfolio, Skills, Education, Experience, Blog, Gallery
- **Bisa Difilter**: Karya dan blog bisa dikelompokkan sesuai kategori
- **Ramah SEO**: Biar mudah ditemukan di Google
- **Gambar Cepat Loading**: Nggak bikin kesel nunggu loading
- **Kontak Lengkap**: Bisa dihubungi lewat sosmed atau form kontak

## Teknologi yang Dipakai 🛠️

- **Next.js**: Buat bikin website yang cepat dan SEO-friendly
- **React**: Untuk bikin tampilan yang interaktif
- **TypeScript**: Biar coding lebih rapi dan minim error
- **Tailwind CSS**: Styling yang praktis dan kekinian
- **Framer Motion**: Buat animasi yang smooth
- **Tabler Icons**: Icon-icon yang kece

## Cara Pakai Website Ini 🚶‍♂️

### Yang Harus Disiapkan

- Node.js (versi 14 ke atas) - software buat menjalankan kode JavaScript
- npm atau yarn - alat buat menginstal paket/library

### Cara Install

1. Download/clone dulu kode website-nya:
   ```sh
   git clone https://github.com/jundy779/portfolio-website.git
   ```
2. Masuk ke folder projeknya:
   ```sh
   cd portfolio-website
   ```
3. Instal semua yang dibutuhkan:
   ```sh
   npm install
   ```
   atau kalau pakai yarn:
   ```sh
   yarn install
   ```

### Cara Jalanin di Komputer Sendiri

Ketik perintah ini di terminal:
```sh
npm run dev
```
atau:
```sh
yarn dev
```
Terus buka `http://localhost:3000` di browser kamu.

## Cara Ubah-Ubah Isinya 🎨

### Info Pribadi
Edit file-file ini untuk ganti info personal:

- `pages/index.tsx`: Ubah konten utama, tentang diri, dan daftar portfolio
- `pages/blog.tsx`: Ganti tulisan blog
- `pages/skill.tsx`: Update kemampuan dan kategorinya
- `pages/education.tsx`: Ubah riwayat pendidikan
- `pages/experience.tsx`: Perbarui pengalaman kerja
- `pages/album.tsx`: Tambah/ubah foto galeri

### Tampilan
- Styling utama: `styles/globals.css`
- Warna-warna: Cari bagian CSS variables di `styles/globals.css`
- Styling per komponen: Masing-masing komponen punya class CSS sendiri

### Gambar
- Taruh gambar baru di folder `public`
- Untuk gambar dari internet, pastikan domain-nya ditambahkan di `next.config.js`

## Cara Upload ke GitHub Pages (Agar Bisa Diakses Online) 🌐

Website ini sudah diatur untuk otomatis muncul online lewat GitHub Pages setiap kali kamu update kodenya. Gampang banget!

### 1. Bikin Akun & Repository GitHub

Kalau belum punya, bikin akun di [GitHub](https://github.com), terus bikin repository baru buat nyimpen kode website-mu.

### 2. Update Info Repository

Di file `package.json`, ganti bagian ini sesuai username GitHub kamu:

```json
{
  "name": "nama-repository-kamu",
  "homepage": "https://username-kamu.github.io/nama-repository-kamu"
}
```

### 3. Setting File `next.config.js`

File `next.config.js` sudah diatur buat GitHub Pages dengan kode ini:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/nama-repository-kamu' : '',
```

Ganti `/nama-repository-kamu` dengan nama repository yang kamu buat.

### 4. Upload ke GitHub

Jalankan perintah ini di terminal:

```sh
git init
git add .
git commit -m "Upload pertama"
git branch -M main
git remote add origin https://github.com/username-kamu/nama-repository-kamu.git
git push -u origin main
```

### 5. Aktifin GitHub Pages

1. Buka repository kamu di GitHub
2. Klik tab "Settings"
3. Scroll ke bawah sampai ketemu bagian "Pages"
4. Di bagian "Source", pilih "GitHub Actions"
5. GitHub akan otomatis menggunakan file `.github/workflows/deploy.yml` untuk memproses website kamu

### 6. Tunggu Prosesnya

GitHub Actions akan otomatis proses website kamu. Kamu bisa pantau prosesnya di tab "Actions" di repository.

### 7. Cek Website Kamu

Setelah selesai, website portfoliomu bisa diakses di:
```
https://username-kamu.github.io/nama-repository-kamu
```

Mau pakai domain sendiri? Bisa! Cek [Panduan custom domain GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Update Terbaru ⭐

- Tambah skill cloud computing: AWS, Digital Ocean, Alibaba Cloud, Tencent Cloud
- Blog load lebih cepet dan bisa difilter sesuai kategori
- Tampilan portfolio lebih lengkap dengan detail dan filter
- Animasi dan tampilan lebih keren
- Perbaikan URL icon

## Mau Ikut Kontribusi? 👨‍💻

Boleh banget! Kalau mau nambahin atau perbaiki sesuatu:

1. Fork repository ini
2. Bikin branch baru (`git checkout -b fitur/fitur-kamu`)
3. Commit perubahan (`git commit -am 'Nambahin fitur keren'`)
4. Push ke branch (`git push origin fitur/fitur-kamu`)
5. Kirim Pull Request

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file [LICENSE](LICENSE) untuk detail lengkapnya.

---

Dibuat dengan ❤️ oleh Muhammad Jundy Rabbani | [GitHub](https://github.com/jundy779) | [LinkedIn](https://www.linkedin.com/in/muh-jundy-rabbani/)

## Screenshot Portfolio 📸

Berikut beberapa tampilan dari website portfolio:

### Tampilan Desktop

![image](https://github.com/user-attachments/assets/21825f58-b04e-462a-ac49-7b53a0a6fb3f)
![image](https://github.com/user-attachments/assets/af3e8a12-8382-40ea-b4f4-97f75d78efa7)
![image](https://github.com/user-attachments/assets/1d0b7e78-9659-46c6-ad90-0d01faa11018)

### Tampilan Mobile

![Screenshot_2025-05-18-21-16-55-537_com android chrome](https://github.com/user-attachments/assets/b0e8420a-1dbc-4f24-983b-4a1e589ec4c0)

## Struktur Folder Proyek 📁

Berikut struktur folder penting dalam proyek ini:

```
portfolio-website/
├── components/         # Komponen yang bisa dipakai ulang
│   ├── PageTransition.tsx
│   └── ui/
│       └── SkeletonCard.tsx
├── pages/              # Halaman-halaman website
│   ├── index.tsx       # Halaman utama
│   ├── blog.tsx        # Halaman blog
│   ├── skill.tsx       # Halaman skills
│   ├── education.tsx   # Halaman pendidikan
│   ├── experience.tsx  # Halaman pengalaman
│   └── album.tsx       # Halaman galeri
├── public/             # File statis seperti gambar
├── styles/             # File CSS
│   └── globals.css     # Style utama dan tema warna
├── .github/workflows/  # Konfigurasi GitHub Actions
│   └── deploy.yml      # Workflow untuk deploy ke GitHub Pages
├── next.config.js      # Konfigurasi Next.js
└── package.json        # Daftar package dan scripts
```

## Troubleshooting 🔧

Berikut beberapa masalah umum dan solusinya:

### Gambar Tidak Muncul

**Masalah**: Gambar dari domain eksternal tidak tampil.

**Solusi**: Pastikan domain gambar sudah ditambahkan di `next.config.js` bagian `images.domains`.

```javascript
images: {
  domains: [
    'example.com',  // Tambahkan domain gambar di sini
  ],
},
```

### Error Saat Build

**Masalah**: Error ketika menjalankan `npm run build`.

**Solusi**:
1. Jalankan `npm install` untuk update dependencies
2. Hapus folder `.next` dan coba build ulang
3. Periksa error log untuk melihat file mana yang bermasalah

### Website Tidak Muncul di GitHub Pages

**Masalah**: Website sudah di-deploy tapi tidak muncul.

**Solusi**:
1. Pastikan branch `gh-pages` sudah terbuat
2. Periksa setting GitHub Pages di repository > Settings > Pages
3. Pastikan nilai `basePath` dan `assetPrefix` di `next.config.js` sudah benar

### Mode Gelap/Terang Tidak Berfungsi

**Masalah**: Tombol toggle dark mode tidak bekerja.

**Solusi**: Pastikan localStorage tersedia di browser. Fungsi ini menggunakan localStorage untuk menyimpan preferensi tema.

## Kredit dan Terima Kasih 💙

Website ini dibuat dengan bantuan teknologi dan resource hebat berikut:

- [Next.js](https://nextjs.org) - Framework React untuk website cepat dan SEO-friendly
- [React](https://reactjs.org) - Library JavaScript untuk membangun antarmuka
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion) - Library animasi React
- [Tabler Icons](https://tabler-icons.io) - Koleksi icon open-source yang keren
- [TypeScript](https://www.typescriptlang.org) - Superset JavaScript dengan typing
- [GitHub Pages](https://pages.github.com) - Hosting gratis untuk website statis

Special thanks untuk semua kontributor dan komunitas open-source yang telah membuat teknologi hebat ini tersedia secara gratis.
Explain
