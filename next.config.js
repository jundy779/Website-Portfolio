/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: [
      'kappa.lol',
      'i.supa.codes',
      'grainy-gradients.vercel.app',
      'cdn.jsdelivr.net',
      'www.svgrepo.com',
      'upload.wikimedia.org',
      'www.alibabacloud.com',
      'static.intl.cloud.tencent.com',
      'i.imgur.com',
      'blogger.googleusercontent.com'
    ],
    unoptimized: true,
  },
  // Gunakan basePath hanya pada mode production (untuk GitHub Pages)
  // Di mode development, basePath tidak akan digunakan
  basePath: process.env.NODE_ENV === 'production' ? '/Website-Portfolio' : '',
  // Seting assetPrefix untuk URL aset statis
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://jundy779.github.io/Website-Portfolio' : '',
  // Mengaktifkan optimasi opsional untuk build yang lebih kecil
  optimizeFonts: true,
  swcMinify: true,

}

module.exports = nextConfig 
