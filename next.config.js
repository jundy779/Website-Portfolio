/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export', // hanya untuk static export, JANGAN untuk Vercel
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
  optimizeFonts: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig 
