import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  IconMenu2,
  IconX,
  IconArrowUp,
  IconHeart,
  IconLock,
  IconShieldLock,
  IconPhoto,
  IconFilter,
  IconMoon,
  IconSun,
} from '@tabler/icons-react';

interface Photo {
  id: number;
  src: string;
  caption: string;
  date: string;
}

const Album = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [protectionEnabled, setProtectionEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Photo gallery data
  const photos: Photo[] = [
    {
      id: 1,
      src: "https://i.supa.codes/4zBco-",
      caption: "Tempest VPN - 2022 🤭",
      date: "2024-12-25"
    },
    {
      id: 2,
      src: "https://i.supa.codes/0vJ43J",
      caption: "A bright day with smiles 😊",
      date: "2025-01-16"
    },
    {
      id: 3,
      src: "https://i.supa.codes/lGuq66",
      caption: "Digital Ocean again 😊",
      date: "2025-01-16"
    },
    {
      id: 4,
      src: "https://i.supa.codes/aE_V7x",
      caption: "Happiness",
      date: "2025-01-17"
    }
  ];

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

    // Copy protection handlers
    const handleContextMenu = (e: MouseEvent) => {
      if (protectionEnabled) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (protectionEnabled && 
          ((e.ctrlKey && (e.key === 'c' || e.key === 's' || e.key === 'u' || e.key === 'p')) ||
           (e.key === 'PrintScreen') ||
           (e.altKey && e.key === 'PrintScreen'))
      ) {
        e.preventDefault();
      }
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
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      fadeElems.forEach(elem => observer.unobserve(elem));
    };
  }, [protectionEnabled]);

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

  const toggleProtection = () => {
    setProtectionEnabled(!protectionEnabled);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkbg text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Head>
        <title>Photo Gallery | Muhammad Jundy Rabbani</title>
        <link rel="icon" href="https://i.supa.codes/HDlaef" />
        <meta name="description" content="Galeri foto dan album Muhammad Jundy Rabbani" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          .prevent-select {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .image-container {
            position: relative;
            border-radius: 8px;
            overflow: hidden;
          }
          .image-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            background: linear-gradient(0deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%);
          }
        `}</style>
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect dark:bg-darkbg/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
              Photo Gallery
            </h1>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-darkbg-lighter transition-colors duration-300"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <IconSun size={20} className="text-yellow-400" /> : <IconMoon size={20} className="text-primary" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
              >
                {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="nav-link font-quicksand">Home</a>
              <a href="#gallery" className="nav-link font-quicksand">Gallery</a>
              <button 
                onClick={toggleProtection}
                className={`flex items-center space-x-1 nav-link font-quicksand ${protectionEnabled ? 'text-primary' : 'text-gray-400'}`}
                aria-label={protectionEnabled ? "Disable copy protection" : "Enable copy protection"}
              >
                <IconShieldLock size={20} />
                <span className="text-sm">{protectionEnabled ? 'Protected' : 'Unprotected'}</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect dark:bg-darkbg-lighter pb-3">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">
                Home
              </a>
              <a href="#gallery" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">
                Gallery
              </a>
              <button 
                onClick={toggleProtection}
                className={`flex items-center space-x-1 w-full text-left px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand ${protectionEnabled ? 'text-primary' : 'text-gray-400'}`}
              >
                <IconShieldLock size={20} />
                <span className="text-sm">{protectionEnabled ? 'Protected' : 'Unprotected'}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative mb-12">
          <div className="w-full h-48 md:h-64 lg:h-80 bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-darkbg-lighter relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <IconPhoto size={48} className="mx-auto mb-4 opacity-80" />
                <h1 className="text-4xl md:text-5xl font-bold mb-2 font-quicksand">Photo Collection</h1>
                <p className="text-sm md:text-base opacity-80 font-quicksand">Capturing moments worth remembering</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 px-4 fade-in-section">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
                My Gallery
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-quicksand">{photos.length} photos</span>
                <IconFilter size={20} className="text-gray-400 dark:text-gray-500" />
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo) => (
                <div key={photo.id} className="bg-white dark:bg-darkbg-card rounded-xl shadow-md overflow-hidden prevent-select card-hover">
                  <div className="relative aspect-w-4 aspect-h-3 image-container">
                    <div style={{ position: 'relative', width: '100%', height: '280px' }}>
                      <Image
                        src={photo.src}
                        alt="Gallery Photo"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transform transition-transform duration-300 hover:scale-105"
                        unoptimized
                      />
                    </div>
                    {protectionEnabled && (
                      <div className="absolute top-3 right-3 glass-effect dark:bg-darkbg-lighter/80 rounded-full p-2 z-10">
                        <IconLock size={14} className="text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-gray-700 dark:text-gray-300 font-quicksand font-medium text-lg mb-1">{photo.caption}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-400 font-quicksand text-xs">{photo.date}</p>
                      <div className="flex items-center text-xs text-primary">
                        <IconHeart size={14} className="mr-1" />
                        <span>Save</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gradient-to-r from-primary-dark to-primary py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-quicksand font-bold text-xl mb-2">Muhammad Jundy Rabbani</h3>
              <p className="font-quicksand text-sm opacity-80">
                A collection of precious moments
              </p>
            </div>
            <div>
              <p className="font-quicksand text-sm opacity-80 text-center md:text-right">
                © {new Date().getFullYear()} Muhammad Jundy Rabbani. Made with <IconHeart size={14} className="inline" />
              </p>
              <p className="font-quicksand text-xs opacity-60 mt-1 text-center md:text-right">
                All photos are protected
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-primary cursor-pointer transition-all duration-300 hover:bg-primary-dark"
          aria-label="Scroll to top"
        >
          <IconArrowUp size={20} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Album;
