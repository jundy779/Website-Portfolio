# Website Portfolio Keren Pakai Next.js 🚀
Website portfolio kece buat Kalian. Dibuat pakai Next.js, React, dan Tailwind CSS.

A modern, responsive portfolio website showcasing my work as a Student, Gamer, and Business Development professional. Built with Next.js, React, and Tailwind CSS.

![image](https://github.com/user-attachments/assets/
c1a694d1-0aeb-438a-8f51-f5cc313c9bb3)
![image](https://github.com/user-attachments/assets/
31a2d151-9654-4a55-8504-69f8901497a0)
![image](https://github.com/user-attachments/assets/
aea9a5e0-5758-4e62-b1ff-c29c59d63b82)

## Live Demo
Visit my portfolio at: [muh-jundy-rabbani.vercel.app](https://muh-jundy-rabbani.vercel.app)

## Features ✨

- **Modern Design**: Clean and professional UI with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized for speed and SEO
- **Interactive**: Engaging user experience with smooth transitions
- **Portfolio Showcase**: Display projects with detailed information
- **Contact Section**: Easy ways to connect through social media
- **Blog Integration**: Share thoughts and experiences
- **Gallery**: Photo collection with protection features

## Tech Stack 🛠️

- **Framework**: Next.js 13.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started 🚀

1. Clone the repository:
```bash
git clone https://github.com/jundy779/Website-Portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cara Upload ke Vercel (Agar Bisa Diakses Online) 🌐

Website ini sudah diatur untuk otomatis muncul online lewat Vercel setiap kali kamu update kodenya. Gampang banget!

### 1. Bikin Akun Vercel

Kalau belum punya, bikin akun di [Vercel](https://vercel.com), terus hubungkan dengan akun GitHub kamu.

### 2. Import Repository

1. Klik tombol "New Project" di dashboard Vercel
2. Pilih repository GitHub yang mau di-deploy
3. Vercel akan otomatis mendeteksi bahwa ini proyek Next.js

### 3. Deploy

1. Klik "Deploy"
2. Vercel akan otomatis build dan deploy website kamu
3. Setelah selesai, website bisa diakses di URL yang diberikan Vercel

### 4. Custom Domain (Opsional)

Kalau mau pakai domain sendiri:
1. Buka project di dashboard Vercel
2. Klik tab "Settings" > "Domains"
3. Tambahkan domain kamu
4. Ikuti instruksi untuk setup DNS

### 5. Update Otomatis

Setiap kali kamu push ke repository GitHub, Vercel akan otomatis deploy ulang website dengan update terbaru.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Email: jundfauzi789@gmail.com
- LinkedIn: [Muhammad Jundy Rabbani](https://www.linkedin.com/in/muh-jundy-rabbani/)
- Instagram: [@muh_jundy_r](https://www.instagram.com/muh_jundy_r)

## Screenshot Portfolio 📸

Berikut beberapa tampilan dari website portfolio:

### Tampilan Desktop

![image](https://github.com/user-attachments/assets/
c1a694d1-0aeb-438a-8f51-f5cc313c9bb3)
![image](https://github.com/user-attachments/assets/
31a2d151-9654-4a55-8504-69f8901497a0)
![image](https://github.com/user-attachments/assets/
aea9a5e0-5758-4e62-b1ff-c29c59d63b82)

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
