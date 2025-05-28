import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconMenu2,
  IconX,
  IconArrowUp,
  IconMoon,
  IconSun,
  IconCalendar,
  IconBriefcase,
  IconBrandReact,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconCode,
  IconBrandNodejs,
  IconDeviceMobile,
  IconChevronRight,
  IconHeartHandshake,
  IconShieldCheck,
  IconBrandKotlin,
  IconBrandFigma,
  IconBuildingStore,
  IconTrophy,
  IconSeo,
  IconBrandGoogleAnalytics,
} from '@tabler/icons-react';

// Interface for skill badges
interface SkillBadge {
  name: string;
  icon: React.ReactNode;
}

// Interface for experience items
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
  location?: string;
  description: string;
  skills: SkillBadge[];
}

const ExperiencePage = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Experience data from LinkedIn
  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      role: "Course Instructor",
      company: "Sinergi Teknologi Digital",
      logo: "https://i.supa.codes/nZLZtG", // Replace with company logo
      startDate: "Agu 2022",
      endDate: "Saat ini",
      location: "Citayam Indonesia",
      description: "Yayasan yang bergerak di bidang jasa teknologi digital yang didirikan untuk membantu dunia pendidikan serta para pelaku umkm yang mempunyai kesulitan dalam bidang teknologi.",
      skills: [
        { name: "Teknik Komputer", icon: <IconCode size={16} /> },
        { name: "Jaringan", icon: <IconShieldCheck size={16} /> },
        { name: "Rekayasa Perangkat Lunak", icon: <IconBrandNodejs size={16} /> }
      ]
    },
    {
      id: 2,
      role: "Business Owner",
      company: "Fusionify Digital Store",
      logo: "https://i.supa.codes/HDlaef", // Replace with company logo
      startDate: "Agu 2022",
      endDate: "Saat ini",
      location: "Bogor, Jawa Barat, Indonesia",
      description: "Owner dari perorangan PT. FUSIONIFY DIGITAL",
      skills: [
        { name: "Virtual Private Network (VPN)", icon: <IconShieldCheck size={16} /> },
        { name: "Search Engine Optimization (SEO)", icon: <IconSeo size={16} /> }
      ]
    },
    {
      id: 3,
      role: "Digital Marketing Specialist",
      company: "MG Digital Payment",
      logo: "https://i.supa.codes/Y-bcpb", // Replace with company logo
      startDate: "Mei 2023",
      endDate: "Jul 2024",
      location: "Sidoarjo, Jawa Timur, Indonesia",
      description: "Merupakan Perusahaan Kecil Perseorangan yang melayani layanan E-commerce PPOB, TOPUP, dll",
      skills: [
        { name: "Virtual Private Network (VPN)", icon: <IconShieldCheck size={16} /> },
        { name: "Penjualan", icon: <IconBuildingStore size={16} /> },
        { name: "Digital Marketing", icon: <IconBrandGoogleAnalytics size={16} /> }
      ]
    },
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
    <div className="min-h-screen bg-gray-50 dark:bg-darkbg text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Head>
        <title>Experience | Muhammad Jundy Rabbani</title>
        <link rel="icon" href="https://i.supa.codes/HDlaef" />
        <meta name="description" content="Pengalaman kerja dan proyek Muhammad Jundy Rabbani" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
                <Link href="/experience" className="nav-link text-primary font-medium text-sm transition-colors duration-200">
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
              <Link href="/education" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                Education
              </Link>
              <Link href="/experience" className="block px-3 py-2 rounded-md bg-primary/10 text-primary font-medium transition-colors duration-200">
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
            Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My work experience as a software engineer and working on different companies and projects.
          </p>
        </section>

        {/* Experience Timeline Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary-dark transform -translate-x-1/2 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceItems.map((item, index) => (
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
                  <div className="bg-white dark:bg-darkbg-card rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 relative z-20 group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-darkbg-lighter rounded-lg flex items-center justify-center p-2 mr-4 shadow-sm overflow-hidden">
                        <img 
                          src={item.logo} 
                          alt={item.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 font-quicksand">
                          {item.role}
                        </h2>
                        <p className="text-primary font-medium text-sm font-quicksand">
                          {item.company}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mt-1">
                          <IconCalendar size={14} className="mr-1" />
                          <span>{item.startDate} - {item.endDate}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {item.skills.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skills:</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <div 
                              key={skillIndex}
                              className="bg-primary/10 dark:bg-primary/20 text-primary px-2 py-1 rounded-full text-xs flex items-center"
                            >
                              {skill.icon}
                              <span className="ml-1">{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute bottom-2 right-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <IconChevronRight size={12} className="text-primary" />
                      </div>
                    </div>
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
  );
};

export default ExperiencePage; 