import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import PageTransition from '../components/PageTransition';
import {
  IconMenu2,
  IconX,
  IconArrowUp,
  IconMoon,
  IconSun,
  IconSchool,
  IconCalendar,
  IconBuildingSkyscraper,
  IconCertificate,
} from '@tabler/icons-react';

// Interface for education items
interface EducationItem {
  id: number;
  institution: string;
  logo: string; 
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
}

const EducationPage = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Education data - replace with your LinkedIn data
  const educationItems: EducationItem[] = [
    {
      id: 1,
      institution: "Sekolah Tinggi Teknologi Terpadu Nurul Fikri",
      logo: "https://i.supa.codes/H4P_mf", // Replace with your school logo
      degree: "Bachelor of Technology",
      fieldOfStudy: "Sistem Informasi",
      startDate: "Oct 2021",
      endDate: "Sep 2025",
      grade: "8.71 CGPA",
      description: "I am currently pursuing a Bachelor's degree in Sistem Informasi at Sekolah Tinggi Teknologi Terpadu Nurul Fikri. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Development."
    },
    {
      id: 2,
      institution: "SMK Graha Nusantara, Bogor",
      logo: "https://i.supa.codes/3oy7TD", // Replace with your school logo
      degree: "TKJ(XII)",
      fieldOfStudy: "Teknik Computer dan Jaringan",
      startDate: "Apr 2019",
      endDate: "Apr 2021",
      grade: "88.2%",
      description: "I completed my class 12 high school education at SMK Graha Nusantara Bogor, where I studied Science with Computer Science."
    },
    {
      id: 3,
      institution: "SMP Muhammadiyah Pabuaran",
      logo: "https://i.supa.codes/bq_ZLx", // Replace with your school logo
      degree: "ICSC(X), Science",
      fieldOfStudy: "Computer Application",
      startDate: "Apr 2017",
      endDate: "Apr 2019", 
      grade: "92.3%",
      description: "I completed my class 10 education at SMP Muhammadiyah Pabuaran, where I studied Science with Computer Application."
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
          <title>Education | Muhammad Jundy Rabbani</title>
          <link rel="icon" href="https://i.supa.codes/HDlaef" />
          <meta name="description" content="Riwayat pendidikan Muhammad Jundy Rabbani" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        
        <NextSeo
          title="Education"
          description="Riwayat pendidikan Muhammad Jundy Rabbani, termasuk gelar Bachelor of Technology di Sekolah Tinggi Teknologi Terpadu Nurul Fikri dan pendidikan di SMA Negeri 1 Bogor."
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
                  <Link href="/education" className="nav-link text-primary font-medium text-sm transition-colors duration-200">
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
                <Link href="/education" className="block px-3 py-2 rounded-md bg-primary/10 text-primary font-medium transition-colors duration-200">
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
              Education
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My education has been a journey of self-discovery and growth. My educational details are as follows.
            </p>
          </section>

          {/* Education Timeline Section */}
          <section className="py-12 px-4 max-w-4xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary-dark transform -translate-x-1/2 hidden md:block"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="relative fade-in-section"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Timeline dot for desktop */}
                  <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 hidden md:block"></div>
                  
                  {/* Card with offset based on even/odd for desktop */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} relative`}>
                    <div className="bg-white dark:bg-darkbg-card rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 relative z-20">
                      <div className="flex items-start mb-4">
                        <div className="w-16 h-16 bg-gray-100 dark:bg-darkbg-lighter rounded-lg flex items-center justify-center p-2 mr-4 shadow-sm overflow-hidden">
                          <img 
                            src={item.logo} 
                            alt={item.institution}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 font-quicksand">
                            {item.institution}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-400 text-sm font-quicksand">
                            {item.degree} - {item.fieldOfStudy}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mt-1">
                            <IconCalendar size={14} className="mr-1" />
                            <span>{item.startDate} - {item.endDate}</span>
                          </div>
                        </div>
                      </div>
                      
                      {item.grade && (
                        <div className="mb-3 bg-primary/10 dark:bg-primary/20 rounded-lg p-2 inline-block">
                          <div className="flex items-center">
                            <IconCertificate size={16} className="text-primary mr-2" />
                            <span className="text-sm font-medium">Grade: {item.grade}</span>
                          </div>
                        </div>
                      )}
                      
                      {item.description && (
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                          {item.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Arrow pointing to timeline for desktop */}
                    <div className={`hidden md:block absolute top-8 h-0 w-0 border-8 ${
                      index % 2 === 0 
                        ? 'left-0 border-r-white dark:border-r-darkbg-card border-t-transparent border-b-transparent border-l-transparent -translate-x-full' 
                        : 'right-0 border-l-white dark:border-l-darkbg-card border-t-transparent border-b-transparent border-r-transparent translate-x-full'
                    } z-10`}></div>
                  </div>
                </div>
              ))}
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

export default EducationPage; 