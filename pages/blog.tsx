import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import PageTransition from '../components/PageTransition';
import SkeletonCard from '../components/ui/SkeletonCard';
import {
  IconMenu2,
  IconX,
  IconArrowUp,
  IconMoon,
  IconSun,
  IconBrandBlogger,
  IconExternalLink,
} from '@tabler/icons-react';

// Interface untuk blog post
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  url: string; // URL menuju blog post lengkap di Blogger
  category: string;
}

const BlogPage = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false); // Set to false for instant loading
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Contoh data blog post - Ganti dengan integrasi API Blogger yang sebenarnya nanti
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Pengertian Fusionify Injector, Keunggulan, dan Cara Menggunakan Fusionify Injector (All Operator)",
      excerpt: "plikasi Fusionify Injector dibilang dapat melindungi keamanan pengguna saat menjelajah internet. Banyak pengembang yang membuat aplikasi untuk memberikan perlindungan dari cybercrime tersebut, salah satunya adalah Fusionify Injector, termasuk dengan dark mode dan animasi...",
      date: "Fusionify Digital Tempest - November 12, 2024",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_D1QLrrm-a4t4fXgoX_Sn-oZHOLTxboFWAuF_oU7-GH12ZZYD7SO19_B5bMQOxg8ECWg10XO2qFUEzNvAvO7IPXny0dM98MdwOg7v1Wvns-ZBEKU0C2b2v3pugafbLx1RHi6H4f08d7fJRmVYlu5A0VuJatkLGkYbMVTcZbBLY4xB5U0k1TtFMQnx/s2048/Judul.png",
      url: "https://fusionifydigital.blogspot.com/2024/11/pengertian-fusionify-injector.html",
      category: "Android VPN"
    },
    {
      id: 2,
      title: "Cek Lokasi Area Paket Akrab lokal XL/Axis 2024",
      excerpt: "Meskipun berada di provinsi yang sama, area Paket Akrab bisa berbeda. Gunakan alat pencarian di bawah ini untuk mengetahui area Anda berdasarkan kota atau kabupaten tempat tinggal.",
      date: " Fusionify Digital Tempest - November 11, 2024",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyaQ6q-De5zPA_Rrf5-GvOZeZIJmCJnI7KfS6ZEjmr1rBd973HjpLwuvwWGapzv8JNCezshyphenhyphensNwdUN2rqFMf9dx4LmWkHhKBEiCppiXK1TSgRkfGYpmSi5BCTcwXLIn_LzlWL9ZEbJffBeAKPUHbyVlqL-kkJe_Ik8I2XUrOJvYvzmgFLEdDgjRB8P/s1660/Gambar%20WhatsApp%202024-11-11%20pukul%2009.23.54_e1e4e03b.jpg",
      url: "https://fusionifydigital.blogspot.com/2024/11/cek-lokasi-area-paket-akrab-xlaxis.html",
      category: "Kuota XL/Axis"
    },
    {
      id: 3,
      title: "Cara Mendapatkan Diskon Pelajar Spotify [Panduan 2025]",
      excerpt: "Kalau kamu mahasiswa yang nggak bisa jauh dari musik, Spotify punya kabar baik: mereka ngasih diskon khusus buat pelajar! Bayangin aja, kamu bisa nikmatin semua fitur Spotify Premium cuma sekitar Rp 27.500/bulan",
      date: "Fusionify Digital Tempest Mei 12, 2025",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6uFJK7nb6fSZhoLY7dfoXReUYVVv_XWbxaJ5Ab5i5a2KethZTXzhthbuc_LtxqXt10Qy5CVGfz6L2DjFUS6frU5wcaCmxocMGFTc1nrgSqTSthOeU83cUPQuGzk4m7YBnBX2_KXxfISU8z7vaKgK7qsK2l6_yTY3EYI2PDDWOLHHTCL5adqcLhRZZ/s3200/spotify%20edu.png",
      url: "https://fusionifydigital.blogspot.com/2025/05/cara-mendapatkan-diskon-pelajar-spotify.html",
      category: "Apps Premium"
    },
    {
      id: 4,
      title: "Mari kita bahas, cara kerja CDN di dunia Injector",
      excerpt: "CDN adalah Content Delivery Network — selebihnya cari sendiri atau tanya AI 😆 Di sini saya bakal spesifik bahas alur untuk tunneling websocket dan gRPC via CDN. Prosesnya seperti di gambar, tapi kita buat simple aja jadi",
      date: "Fusionify Digital Tempest Desember 20, 2024",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQv4v7g-C3dvBF9OTTcZzyf5pHH3mIr-j_ophjW-cRb5Ty4t_LFOOD_X4Fm8GYEgNC98QNcCKA0qDbWRFO-_gE5Md7KTYeAQJyKGuSirkMouDmOoJ0pwXrhflI3Pp1debPHb-kZfrHyxkjJ2t6gvoLIGW0Gyi4HlWgN64OR0aiFI5cXxsnmVOu8muK/s3200/Gambar%20WhatsApp%202024-12-20%20pukul%2017.25.37_6107cc5e.png",
      url: "https://fusionifydigital.blogspot.com/2024/12/mari-kita-bahas-cara-kerja-cdn-di-dunia.html",
      category: "Android VPN"
    },
    {
      id: 5,
      title: "Tutorial dan Command Vipers Bot: Panduan Lengkap",
      excerpt: "Apakah kamu owner grup WhatsApp yang rame atau jualan di grup, tapi member-member kamu sering nakal? 🤔 Nakal seperti kirim link judol, link promosi, atau spam link lainnya? Yuk, atasi semua itu dengan Vipers Bot! Bot ini siap menjaga grup kamu tetap aman, seru, dan nyaman!",
      date: "Fusionify Digital Tempest April 28, 2025",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3wRaMA2BqHZt-F35Y4xXY5uzgm4PMYr93YNxYyDbReuhraAvWJzIL3iDSGFo43z-B_02o1vCrNlq2D6VgsNIOhf42gsFD9x7vyyIwicFjsDbYXiWzaweEm-a_3PSLL7CLJe6yhBzN5aU0AuQLuC8w8uVjwcevLMxSvfzqhmWILpSkk96Z7bAkn_Q3Eg/s1280/20240630_122824.webp",
      url: "https://fusionifydigital.blogspot.com/2025/04/tutorial-dan-command-vipers-bot-panduan.html",
      category: "BOT WhatsApp"
    },
    {
      id: 6,
      title: "Domain my*id telah di blacklist oleh Telegram",
      excerpt: "Domain my*.id saat ini telah masuk daftar hitam oleh Telegram",
      date: "Fusionify Digital Tempest November 11, 2024",
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivuFfgrvRPT5PlAhVmcT40Zew8vYRelyaf9DM6JbooXkcPtLh33CliL3ecgQDmHB7Tw4XDFY6pfdLVGuRnr1cRpWVoJf3t3Fg08vd2HepX-2yfVpXHO2ySaQSbxI-DgUivPu5y8_kJiOpQd9Tyl0d3JJF5LquR04BnriSomF9pPhJbTaqHcE8n3i1u/s2560/Gambar%20WhatsApp%202024-11-11%20pukul%2018.07.37_47bdcb16.jpg",
      url: "https://fusionifydigital.blogspot.com/2024/11/domain-myid-telah-di-blacklist-oleh.html",
      category: "Gretongers"
    },
  ];

  // Filter blog posts based on active category
  const filteredBlogPosts = activeCategory === 'Semua' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Get unique categories from blog posts
  const categories = ['Semua', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  useEffect(() => {
    // Dark mode settings
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Scroll handler
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Animation setup
    const fadeElems = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => observer.observe(elem));

    // Add event listeners
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeElems.forEach(elem => observer.unobserve(elem));
    };
  }, []);

  // Utility functions
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-darkbg text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Head>
          <title>Blog | Muhammad Jundy Rabbani</title>
          <link rel="icon" href="https://i.supa.codes/HDlaef" />
        </Head>
        
        <NextSeo
          title="Blog"
          description="Blog Muhammad Jundy Rabbani tentang web development, android development, digital marketing, dan UI/UX design. Dapatkan tips, tutorial, dan insight terbaru."
        />

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-darkbg/90 backdrop-blur-sm shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity font-quicksand">
                  Muhammad Jundy Rabbani
                </h1>
              </Link>

              <div className="flex items-center gap-8">
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-darkbg-lighter transition-colors duration-300"
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {darkMode ? <IconSun size={20} className="text-yellow-400" /> : <IconMoon size={20} className="text-primary" />}
                </button>
    
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    Home
                  </Link>
                  <Link href="/#about" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    About
                  </Link>
                  <Link href="/#portfolio" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    Portfolio
                  </Link>
                  <Link href="/education" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    Education
                  </Link>
                  <Link href="/experience" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    Experience
                  </Link>
                  <Link href="/skill" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    Skills
                  </Link>
                  <Link href="/album" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    Gallery
                  </Link>
                  <Link href="/blog" className="nav-link text-primary font-medium text-sm transition-colors duration-200">
                    Blog
                  </Link>
                  <Link href="/#contact" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                    Contact
                  </Link>
                </nav>
    
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-darkbg-lighter transition-colors duration-300"
                >
                  {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-darkbg-lighter pb-3 shadow-md">
              <div className="px-6 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  Home
                </Link>
                <Link href="/#about" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  About
                </Link>
                <Link href="/#portfolio" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  Portfolio
                </Link>
                <Link href="/education" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  Education
                </Link>
                <Link href="/experience" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  Experience
                </Link>
                <Link href="/skill" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  Skills
                </Link>
                <Link href="/album" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  Gallery
                </Link>
                <Link href="/blog" className="block px-3 py-2 rounded-md bg-primary/10 text-primary font-medium transition-colors duration-200">
                  Blog
                </Link>
                <Link href="/#contact" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </header>

        <main className="pt-24 pb-16">
          {/* Hero Section */}
          <section className="py-12 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Berbagi pengetahuan dan pengalaman dalam dunia teknologi, pengembangan web, digital marketing, dan lainnya.
            </p>
            
            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-darkbg-lighter text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-darkbg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="px-4 max-w-6xl mx-auto">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array(3).fill(0).map((_, index) => (
                  <SkeletonCard key={index} variant="blog" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    className="bg-white dark:bg-darkbg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 fade-in-section is-visible"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <Image 
                        src={post.imageUrl} 
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="eager"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {post.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <a 
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm"
                      >
                        Baca Selengkapnya
                        <IconExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Display message when no posts match the selected category */}
            {filteredBlogPosts.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  Tidak ada artikel yang sesuai dengan kategori ini.
                </p>
              </div>
            )}
            
            {/* View All Button - Navigates to Blogger Platform */}
            <div className="text-center mt-12">
              <a 
                href="https://fusionifydigital.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-quicksand font-medium transition-all hover:bg-primary-dark hover:scale-105 transform shadow-md"
              >
                Lihat Semua Blog Post
                <IconBrandBlogger size={20} className="ml-2" />
              </a>
            </div>
          </section>
          
          {/* Blog Integration Info Section */}
          <section className="py-16 px-4 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Ingin Membaca Lebih Banyak?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Kunjungi platform blog saya untuk melihat konten lengkap dan artikel terbaru seputar teknologi, pengembangan web, dan berbagai topik menarik lainnya.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://fusionifydigital.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white dark:bg-darkbg-card text-primary border border-primary rounded-full font-quicksand font-medium transition-all hover:bg-gray-50 dark:hover:bg-darkbg transform shadow-sm"
                >
                  <IconBrandBlogger size={20} className="mr-2" />
                  Kunjungi Blog
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-primary-dark to-primary py-10 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="font-quicksand font-bold text-xl mb-2">Muhammad Jundy Rabbani</h3>
                <p className="font-quicksand text-sm opacity-80">
                  Student, Gamer, and Bisnis Development
                </p>
              </div>
              <div>
                <p className="font-quicksand text-sm opacity-80 text-center md:text-right">
                  © {new Date().getFullYear()} Muhammad Jundy Rabbani. All rights reserved.
                </p>
                <p className="font-quicksand text-xs opacity-60 mt-1 text-center md:text-right">
                  Designed with Next.js and Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed right-4 bottom-4 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-primary cursor-pointer transition-all duration-300 hover:bg-primary-dark shadow-lg"
            aria-label="Scroll to top"
          >
            <IconArrowUp size={20} className="text-white" />
          </button>
        )}
      </div>
    </PageTransition>
  );
};

export default BlogPage; 