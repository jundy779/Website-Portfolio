import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SkeletonCard from '../components/ui/SkeletonCard';
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconMenu2,
  IconX,
  IconArrowUp,
  IconHeart,
  IconMail,
  IconMapPin,
  IconCalendar,
  IconSchool,
  IconDeviceGamepad2,
  IconMoon,
  IconSun,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandVk,
  IconBriefcase,
  IconDeviceMobile,
  IconCertificate,
  IconCode,
  IconBrandFigma,
  IconExternalLink,
  IconFileText,
  IconChevronRight,
  IconChevronLeft,
  IconPlayerPlay,
  IconBrandAndroid,
  IconShield,
  IconBrandGooglePlay,
  IconGlobe,
} from '@tabler/icons-react';
import { useTheme } from 'next-themes';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/muh_jundy_r',
    icon: <IconBrandInstagram size={24} />,
    color: 'text-primary',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@jundytempestore',
    icon: <IconBrandTiktok size={24} />,
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/JundyOfficial',
    icon: <IconBrandTwitter size={24} />,
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muh-jundy-rabbani/',
    icon: <IconBrandLinkedin size={24} />,
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/TempestVPNOfficial',
    icon: <IconBrandTelegram size={24} />,
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    name: 'VK',
    url: 'https://vk.com/muhammadjundyrabbani',
    icon: <IconBrandVk size={24} />,
    color: 'text-primary-dark',
  },
];

const portfolioItems = [
  {
    id: 1,
    title: "Fusion Tempest VPN",
    category: "Mobile App",
    description: "Secure, fast Android VPN application with global servers and advanced privacy features.",
    fullDescription: "Fusion Tempest VPN is a cutting-edge virtual private network application designed for Android users who prioritize their online privacy and security. The app offers military-grade encryption, a strict no-logs policy, and access to over 500 servers in 50+ countries worldwide.\n\nThe application features a user-friendly interface with one-tap connection, automatic server selection based on speed and latency, and a kill switch to protect user data in case of connection drops. Users can enjoy unlimited bandwidth and server switching, making it perfect for streaming, gaming, and browsing.\n\nAs the lead developer on this project, I was responsible for the entire application architecture, backend integration with our VPN server infrastructure, and implementation of the OpenVPN and WireGuard protocols. The app has achieved over 100,000 downloads with a 4.6-star rating on Google Play Store.",
    technologies: ["Java", "Kotlin", "Android SDK", "OpenVPN", "WireGuard", "Firebase"],
    image: "https://i.supa.codes/SKNnlE",
    images: [
      "https://i.supa.codes/QCFy00", // Main dashboard
      "https://kappa.lol/zUTY4", // Server selection
      "https://kappa.lol/h2Oj2", // Connection active
      "https://kappa.lol/i10G8", // Settings page
    ],
    videoUrl: "https://www.youtube.com/embed/YViePRFexcI?si=G-T1jSa6z4fh4VAc", // Replace with actual video
    demoUrl: "https://play.google.com/store/apps/details?id=com.fusiontempest.vpn",
    icon: <IconShield size={24} />,
    featured: true,
    completionDate: "2023-10-15"
  },
  {
    id: 2,
    title: "FTV Injector VPN",
    category: "Mobile App",
    description: "Secure, fast Android VPN application with global servers and advanced privacy features.",
    fullDescription: "Fusion Tempest VPN is a cutting-edge virtual private network application designed for Android users who prioritize their online privacy and security. The app offers military-grade encryption, a strict no-logs policy, and access to over 500 servers in 50+ countries worldwide.\n\nThe application features a user-friendly interface with one-tap connection, automatic server selection based on speed and latency, and a kill switch to protect user data in case of connection drops. Users can enjoy unlimited bandwidth and server switching, making it perfect for streaming, gaming, and browsing.\n\nAs the lead developer on this project, I was responsible for the entire application architecture, backend integration with our VPN server infrastructure, and implementation of the OpenVPN and WireGuard protocols. The app has achieved over 100,000 downloads with a 4.6-star rating on Google Play Store.",
    technologies: ["Java", "Kotlin", "Android SDK", "OpenVPN", "WireGuard", "Firebase"],
    image: "https://i.supa.codes/g2WER0",
    images: [
      "https://i.supa.codes/QCFy00", // Main dashboard
      "https://kappa.lol/zUTY4", // Server selection
      "https://kappa.lol/h2Oj2", // Connection active
      "https://kappa.lol/i10G8", // Settings page
    ],
    videoUrl: "https://www.youtube.com/embed/YViePRFexcI?si=G-T1jSa6z4fh4VAc", // Replace with actual video
    demoUrl: "https://play.google.com/store/apps/details?id=com.fusiontempest.vpn",
    icon: <IconShield size={24} />,
    featured: true,
    completionDate: "2023-10-15"
  },
  {
    id: 3,
    title: "E-Commerce Business",
    category: "Digital Business",
    description: "Developed a successful online store specializing in digital products with integrated payment system.",
    technologies: ["NextJS", "Stripe", "MongoDB"],
    image: "https://kappa.lol/zfmAc",
    icon: <IconBriefcase size={24} />,
    url: "#",
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "Mobile App",
    description: "Android application for food delivery services with real-time tracking and payment features.",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    image: "https://kappa.lol/xcJMt",
    icon: <IconDeviceMobile size={24} />,
    url: "#",
  },
  {
    id: 5,
    title: "Web Development",
    category: "Certification",
    description: "Certified in modern web development technologies and frameworks from Google Developer Program.",
    technologies: ["HTML/CSS", "JavaScript", "React"],
    image: "https://kappa.lol/t3Tts",
    icon: <IconCertificate size={24} />,
    url: "#",
  },
  {
    id: 6,
    title: "Inventory Management System",
    category: "Web App",
    description: "Full-stack application for inventory management with analytics dashboard and user management.",
    technologies: ["Node.js", "React", "MySQL"],
    image: "https://kappa.lol/E62gT",
    icon: <IconCode size={24} />,
    url: "#",
  },
  {
    id: 7,
    title: "Portfolio Design",
    category: "UI/UX",
    description: "Professional portfolio website design with modern UI/UX principles and responsive layout.",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS"],
    image: "https://kappa.lol/uG54Y",
    icon: <IconBrandFigma size={24} />,
    url: "#",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleProjectCount, setVisibleProjectCount] = useState(5);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [scrollProgress, setScrollProgress] = useState(0);
  const modalRef = useRef(null);
  const { resolvedTheme, setTheme } = useTheme();

  // Filter projects berdasarkan kategori yang dipilih
  const filteredProjects = selectedCategory === 'All Projects' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory || 
        (selectedCategory === 'Web Development' && item.category === 'Web App'));
  
  // Tentukan jumlah project yang akan ditampilkan (hanya tampilkan sejumlah visibleProjectCount)
  const visibleProjects = filteredProjects.slice(0, visibleProjectCount);
  
  // Tentukan apakah masih ada project yang tersisa
  const hasMoreProjects = visibleProjectCount < filteredProjects.length;

  // Load more projects (5 tambahan setiap kali)
  const loadMoreProjects = () => {
    setVisibleProjectCount(prevCount => Math.min(prevCount + 5, filteredProjects.length));
  };

  // Fungsi untuk mengubah kategori
  const changeCategory = (category) => {
    setSelectedCategory(category);
    setVisibleProjectCount(5); // Reset jumlah proyek yang ditampilkan saat ganti kategori
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button
      setShowScrollTop(window.scrollY > 300);
      
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      
      // Update parallax elements
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = parseFloat(getComputedStyle(element).getPropertyValue('--parallax-speed'));
        const offset = scrollTop * speed;
        (element as HTMLElement).style.setProperty('--parallax-offset', `${offset}px`);
      });
    };

    // Add fade-in effect to sections
    const fadeElems = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => observer.observe(elem));

    window.addEventListener('scroll', handleScroll);

    // Close modal when clicking outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    // Simulate data loading for portfolio items
    const timer = setTimeout(() => {
      setLoadingPortfolio(false);
    }, 1800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeElems.forEach(elem => observer.unobserve(elem));
      document.removeEventListener('mousedown', handleClickOutside);
      // Re-enable body scroll when component unmounts
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [selectedProject]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to open project modal
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Function to navigate images in the carousel
  const navigateImage = (direction) => {
    if (!selectedProject || !selectedProject.images) return;
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkbg text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Head>
        <title>Muhammad Jundy Rabbani | Personal Portfolio</title>
        <meta name="description" content="Muhammad Jundy Rabbani's personal portfolio website" />
        <meta name="keywords" content="Muhammad Jundy Rabbani, Personal Portfolio, Portfolio Website" />
        <link rel="icon" href="https://i.supa.codes/HDlaef" />
      </Head>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 glass-effect dark:bg-darkbg/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
              Muhammad Jundy Rabbani
            </h1>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-darkbg-lighter transition-colors duration-300"
                aria-label={resolvedTheme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              >
                {resolvedTheme === 'dark'
                  ? <IconSun size={20} className="text-yellow-400" />
                  : <IconMoon size={20} className="text-primary" />}
              </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
            >
              {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link font-quicksand">About</a>
              <a href="#portfolio" className="nav-link font-quicksand">Portfolio</a>
              <a href="/education" className="nav-link font-quicksand">Education</a>
              <a href="/experience" className="nav-link font-quicksand">Experience</a>
              <a href="/skill" className="nav-link font-quicksand">Skills</a>
              <a href="/album" className="nav-link font-quicksand">Gallery</a>
              <a href="/blog" className="nav-link font-quicksand">Blog</a>
              <a href="#contact" className="nav-link font-quicksand">Contact</a>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect dark:bg-darkbg-lighter pb-3">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">About</a>
              <a href="#portfolio" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">Portfolio</a>
              <a href="/education" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">Education</a>
              <a href="/experience" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">Experience</a>
              <a href="/skill" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">Skills</a>
              <a href="/album" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">Gallery</a>
              <a href="/blog" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">Blog</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-20 transition-colors duration-300 font-quicksand">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section className="relative h-[80vh] flex items-center justify-center animate-gradient bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-primary-dark dark:via-darkbg-lighter dark:to-darkbg overflow-hidden">
          {/* Background noise effect */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          
          {/* Floating tech icons */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="floating-icon" style={{top: '10%', left: '15%', animationDelay: '0s'}}>
              <div className="h-10 w-10 bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 dark:text-white/70"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
            </div>
            <div className="floating-icon" style={{top: '70%', left: '10%', animationDelay: '1s'}}>
              <div className="h-8 w-8 bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 dark:text-white/70"><path d="M17.5 2h-11a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5Z"></path><path d="M9.5 21.5h5"></path></svg>
              </div>
            </div>
            <div className="floating-icon" style={{top: '25%', left: '85%', animationDelay: '2s'}}>
              <div className="h-12 w-12 bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 dark:text-white/70"><path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z"></path><polygon points="10 15 15 12 10 9"></polygon></svg>
              </div>
            </div>
            <div className="floating-icon" style={{top: '60%', left: '80%', animationDelay: '1.5s'}}>
              <div className="h-9 w-9 bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 dark:text-white/70"><path d="m3 7 9 6 9-6"></path><path d="M12 22V13"></path><path d="m3 17 9-6 9 6"></path><path d="M3 2h18v10"></path></svg>
              </div>
            </div>
            <div className="floating-icon" style={{top: '15%', left: '50%', animationDelay: '3s'}}>
              <div className="h-10 w-10 bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 dark:text-white/70"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m2 12 2 0"></path><path d="m20 12 2 0"></path><path d="m6.3 17.7-.7.7"></path><path d="m18.4 5.6-.7.7"></path><path d="m6.3 6.3-.7-.7"></path><path d="m18.4 18.4-.7-.7"></path></svg>
              </div>
            </div>
            <div className="floating-icon" style={{top: '40%', left: '30%', animationDelay: '0.5s'}}>
              <div className="h-12 w-12 bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 dark:text-white/70"><path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path><path d="M10 18.5v.5"></path></svg>
              </div>
            </div>
            <div className="floating-icon" style={{top: '75%', left: '45%', animationDelay: '2.5s'}}>
              <div className="h-9 w-9 bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70 dark:text-white/70"><path d="M5 8a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1"></path><path d="M5 12h14"></path><path d="M5 18h14"></path><path d="M5 22h14"></path><path d="M9 22v-4"></path><path d="M9 5v13"></path></svg>
              </div>
            </div>
          </div>
          
          <div className="text-center px-4 z-10" data-aos="fade-up">
            <div className="relative inline-block mb-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-32 h-32 rounded-full bg-white dark:bg-darkbg-lighter shadow-lg overflow-hidden p-1 border border-primary/20">
                <Image
                  src="/public/CHATGPT.png"
                  alt="Profile"
                  width={128}
                  height={128}
                  priority
                  className="w-full h-full rounded-full object-cover bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-darkbg-lighter rounded-full p-2 shadow-md border border-primary/20">
                <IconDeviceGamepad2 size={20} className="text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand animate-typing">
              Muhammad Jundy Rabbani
            </h1>
            <p className="text-xl md:text-2xl text-primary-dark dark:text-gray-300 font-quicksand animate-fade-in">
              Student, Gamer, and Bisnis Development
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="600">
              <a 
                href="#about" 
                className="inline-block px-6 py-3 bg-primary text-white rounded-full font-quicksand font-medium transition-all hover:bg-primary-dark hover:scale-105 transform shadow-md mr-4"
              >
                Get to know me
              </a>
              <a 
                href="/CV.pdf" 
                className="inline-block px-6 py-3 bg-white text-primary border border-primary/30 rounded-full font-quicksand font-medium transition-all hover:bg-gray-50 hover:scale-105 transform shadow-md"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <span className="ml-1">📄</span>
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-darkbg to-transparent"></div>
          
          {/* Scrolling indicator animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 dark:border-white/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/80 dark:bg-white/60 rounded-full mt-2 animate-scroll-down"></div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 fade-in-section">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
              About Me
            </h2>
            <div className="bg-white dark:bg-darkbg-card rounded-2xl shadow-lg p-8 card-hover overflow-hidden relative parallax">
              {/* Decorative elements with parallax */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl parallax-bg parallax-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 dark:bg-secondary/5 rounded-full blur-xl parallax-bg parallax-fast"></div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 font-quicksand relative z-10">
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
                  <div className="p-3 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-30 mr-4 shadow-md">
                    <IconCalendar size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">Birthday</p>
                    <p className="text-lg font-medium">September 19, 2003</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
                  <div className="p-3 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-30 mr-4 shadow-md">
                    <IconMapPin size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">Location</p>
                    <p className="text-lg font-medium">Bogor, Jawa Barat, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-center transform hover:translate-x-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
                  <div className="p-3 rounded-full bg-primary bg-opacity-10 dark:bg-opacity-30 mr-4 shadow-md">
                    <IconSchool size={28} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mb-1">Education</p>
                    <p className="text-lg font-medium">S1 Sekolah Tinggi Teknologi Terpadu Nurul Fikri, Sistem Informasi</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary to-secondary text-white rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" data-aos="zoom-in" data-aos-delay="400">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <IconDeviceGamepad2 size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">
                  Excited to play games and draw things.
                </p>
                      <p className="mt-2 opacity-90">
                  Active student with interests in arts and digital media.
                </p>
                      <div className="flex space-x-2 mt-4">
                        <span className="bg-white/20 text-xs px-3 py-1 rounded-full">Gaming</span>
                        <span className="bg-white/20 text-xs px-3 py-1 rounded-full">Art</span>
                        <span className="bg-white/20 text-xs px-3 py-1 rounded-full">Digital Media</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4 fade-in-section relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/15 dark:bg-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
                My Portfolio
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                Here are some of my recent projects and achievements across various fields
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => changeCategory('All Projects')}
                className={`${selectedCategory === 'All Projects' ? 'bg-primary/10 dark:bg-primary/20 text-primary' : 'hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300'} font-medium rounded-full px-5 py-2 text-sm transition-all`}
              >
                All Projects
              </button>
              <button 
                onClick={() => changeCategory('Digital Business')}
                className={`${selectedCategory === 'Digital Business' ? 'bg-primary/10 dark:bg-primary/20 text-primary' : 'hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300'} font-medium rounded-full px-5 py-2 text-sm transition-all`}
              >
                Digital Business
              </button>
              <button 
                onClick={() => changeCategory('Mobile App')}
                className={`${selectedCategory === 'Mobile App' ? 'bg-primary/10 dark:bg-primary/20 text-primary' : 'hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300'} font-medium rounded-full px-5 py-2 text-sm transition-all`}
              >
                Mobile Apps
              </button>
              <button 
                onClick={() => changeCategory('Certification')}
                className={`${selectedCategory === 'Certification' ? 'bg-primary/10 dark:bg-primary/20 text-primary' : 'hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300'} font-medium rounded-full px-5 py-2 text-sm transition-all`}
              >
                Certifications
              </button>
              <button 
                onClick={() => changeCategory('Web Development')}
                className={`${selectedCategory === 'Web Development' ? 'bg-primary/10 dark:bg-primary/20 text-primary' : 'hover:bg-primary/10 dark:hover:bg-primary/20 text-gray-600 dark:text-gray-300'} font-medium rounded-full px-5 py-2 text-sm transition-all`}
              >
                Web Development
              </button>
            </div>
            
            {loadingPortfolio ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array(6).fill(0).map((_, index) => (
                  <SkeletonCard key={index} variant="portfolio" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleProjects.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-white dark:bg-darkbg-card rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 group animate-portfolio"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="relative h-48 overflow-hidden">
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gray-900/30 dark:bg-gray-900/40 group-hover:bg-primary/30 transition-all duration-300 z-10"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-white dark:bg-darkbg-lighter text-primary text-xs font-medium py-1.5 px-3 rounded-full shadow-sm">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={item.image} 
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg mr-3">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 dark:bg-darkbg-lighter text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-end">
                        <button 
                          onClick={() => openProjectDetails(item)}
                          className="text-primary hover:text-primary-dark text-sm font-medium flex items-center transition-colors cursor-pointer"
                        >
                          <span>View Project</span>
                          <IconExternalLink size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Tampilkan tombol Load More Projects hanya jika masih ada project yang belum ditampilkan */}
            {hasMoreProjects && (
              <div className="flex justify-center mt-12">
                <button 
                  onClick={loadMoreProjects}
                  className="flex items-center gap-2 bg-white dark:bg-darkbg-card px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <IconFileText size={18} className="text-primary" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Load More Projects ({visibleProjectCount} / {filteredProjects.length})
                  </span>
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-darkbg-lighter fade-in-section relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/15 dark:bg-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
              Let's Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
              Feel free to reach out to me through any of these platforms. I'm always open to new connections and opportunities!
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="group relative bg-white dark:bg-darkbg-card rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/10 rounded-full translate-x-5 translate-y-5"></div>
                  </div>
                  
                  <div className="px-5 py-8 flex flex-col items-center relative z-10">
                    {/* Icon with colorful background */}
                    <div className={`mb-4 p-4 rounded-full bg-gray-50 dark:bg-darkbg-lighter transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md ${link.name === 'Instagram' ? 'group-hover:bg-gradient-to-br from-primary-light to-primary group-hover:text-white' : ''} ${link.name === 'TikTok' ? 'group-hover:bg-gradient-to-r from-primary-dark to-primary group-hover:text-white' : ''} ${link.name === 'Twitter' ? 'group-hover:bg-blue-400 group-hover:text-white' : ''} ${link.name === 'LinkedIn' ? 'group-hover:bg-blue-600 group-hover:text-white' : ''} ${link.name === 'Telegram' ? 'group-hover:bg-blue-500 group-hover:text-white' : ''} ${link.name === 'VK' ? 'group-hover:bg-blue-700 group-hover:text-white' : ''}`}>
                      <div className={`${link.color} group-hover:text-white`}>
                        {link.icon}
                      </div>
                    </div>
                    
                    {/* Platform name */}
                    <h3 className="font-quicksand font-semibold text-lg mb-1 text-gray-800 dark:text-gray-200 group-hover:text-primary">
                    {link.name}
                    </h3>
                    
                    {/* Username */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {link.name === 'Instagram' && '@muh_jundy_r'}
                      {link.name === 'TikTok' && '@jundytempestore'}
                      {link.name === 'Twitter' && '@JundyOfficial'}
                      {link.name === 'LinkedIn' && 'Muhammad Jundy Rabbani'}
                      {link.name === 'Telegram' && '@TempestVPNOfficial'}
                      {link.name === 'VK' && 'muhammadjundyrabbani'}
                    </p>
                    
                    {/* Connect button */}
                    <span className="text-xs font-medium py-1 px-3 bg-gray-100 dark:bg-darkbg rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      Connect
                  </span>
                  </div>
                  
                  {/* Bottom decoration bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              ))}
            </div>
            
            {/* Additional contact info - Change from VK to Email */}
            <div className="mt-16 bg-white dark:bg-darkbg-card rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mr-4">
                    <IconMail size={24} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">Prefer Email?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Send me a direct message</p>
                  </div>
                </div>
                <a 
                  href="mailto:jundfauzi789@gmail.com" 
                  className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center"
                >
                  <span>Send Email</span>
                  <IconMail size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative mt-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-light via-primary to-secondary"></div>
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary-dark/20 rounded-full blur-3xl"></div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-darkbg py-10 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100k+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">App Downloads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="bg-gradient-to-r from-primary-dark to-primary py-12 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Info */}
              <div className="space-y-4">
                <h3 className="font-quicksand font-bold text-2xl mb-4 flex items-center">
                  <span className="bg-white/20 w-8 h-8 rounded-lg flex items-center justify-center mr-2">MJ</span>
                  Muhammad Jundy Rabbani
                </h3>
                <p className="font-quicksand text-sm opacity-80 max-w-xs">
                  Student, Gamer, and Bisnis Development with a passion for arts and digital media.
                </p>
                <div className="flex space-x-3 mt-6">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url}
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Column 2: Links and Tech Stack */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h4 className="font-quicksand font-bold text-lg mb-4 text-white/90 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    Quick Links
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="#about" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      About Me
                    </a>
                    <a href="#portfolio" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      Portfolio
                    </a>
                    <a href="#contact" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      Contact
                    </a>
                    <a href="/education" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      Education
                    </a>
                    <a href="/experience" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      Experience
                    </a>
                    <a href="/album" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      Gallery
                    </a>
                    <a href="/skill" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      Skills
                    </a>
                    <a href="/blog" className="opacity-70 hover:opacity-100 transition-all hover:translate-x-1 flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      Blog
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-quicksand font-bold text-lg mb-3 text-white/90 flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white/10 text-xs rounded-md">Next.js</span>
                    <span className="px-2 py-1 bg-white/10 text-xs rounded-md">React</span>
                    <span className="px-2 py-1 bg-white/10 text-xs rounded-md">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-white/10 text-xs rounded-md">TypeScript</span>
                    <span className="px-2 py-1 bg-white/10 text-xs rounded-md">Kotlin</span>
                    <span className="px-2 py-1 bg-white/10 text-xs rounded-md">Node.js</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Contact & CV */}
              <div>
                <div className="bg-white/10 p-5 rounded-xl">
                  <h4 className="font-quicksand font-bold text-lg mb-3 text-white/90 flex items-center">
                    <IconHeart size={16} className="mr-2" /> Available For Work
                  </h4>
                  <p className="text-sm opacity-80 mb-4">
                    I'm currently available for freelance work or collaborations. Interested in working together?
                  </p>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:jundfauzi789@gmail.com" className="flex items-center text-sm opacity-80 hover:opacity-100">
                      <IconMail size={16} className="mr-2" /> jundfauzi789@gmail.com
                    </a>
                    <a 
                      href="/CV.pdf" 
                      className="text-center bg-white/20 hover:bg-white/30 py-2 px-4 rounded-lg transition-all"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV
                    </a>
                  </div>
                  <div className="w-full h-0.5 bg-white/10 my-4"></div>
                  <div className="text-xs opacity-70 text-center">
                    <p className="font-quicksand">
                      © {new Date().getFullYear()} Muhammad Jundy Rabbani
                    </p>
                    <p className="mt-1">
                      All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-white/10 my-8"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
              <p>Designed with <IconHeart size={12} className="inline mx-1 text-red-400" /> and powered by Next.js</p>
              <div className="flex items-center mt-2 md:mt-0 gap-2">
                <span>Version 1.1.0</span>
                <span className="mx-2">•</span>
                <span>Last updated: May 2023</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 z-40 w-12 h-12 flex items-center justify-center rounded-full bg-primary cursor-pointer transition-all duration-300 hover:bg-primary-dark shadow-lg"
          aria-label="Scroll to top"
        >
          <IconArrowUp size={20} className="text-white" />
        </button>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 dark:bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="bg-white dark:bg-darkbg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header with title and close button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-darkbg-card z-10">
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">{selectedProject.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="p-2 hover:bg-gray-100 dark:hover:bg-darkbg-lighter rounded-full transition-colors"
                aria-label="Close modal"
              >
                <IconX size={24} />
              </button>
            </div>
            
            {/* Image carousel */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="relative">
                <div className="relative h-64 sm:h-80 md:h-96">
                  <Image 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-contain bg-gray-50 dark:bg-darkbg-lighter"
                  />
                </div>
                
                {/* Navigation arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => navigateImage('prev')}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-darkbg-card/80 p-2 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <IconChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => navigateImage('next')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-darkbg-card/80 p-2 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Next image"
                    >
                      <IconChevronRight size={20} />
                    </button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index ? 'bg-primary w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            
            {/* Video section */}
            {selectedProject.videoUrl && (
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <IconPlayerPlay size={20} className="text-primary mr-2" />
                  <h3 className="font-semibold text-lg">Project Demo</h3>
                </div>
                <div className="aspect-video bg-gray-100 dark:bg-darkbg-lighter rounded-lg overflow-hidden">
                  <iframe 
                    src={selectedProject.videoUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${selectedProject.title} video demo`}
                  ></iframe>
                </div>
              </div>
            )}
            
            {/* Description section */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg mr-3">
                  {selectedProject.icon}
                </div>
                <h3 className="font-semibold text-lg">Project Description</h3>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                {selectedProject.fullDescription ? (
                  selectedProject.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                  ))
                ) : (
                  <p className="leading-relaxed">{selectedProject.description}</p>
                )}
              </div>
            </div>
            
            {/* Technologies section */}
            <div className="px-6 pb-6">
              <h3 className="font-semibold mb-3 text-lg">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action links */}
              <div className="flex flex-wrap gap-3 mt-6">
                {selectedProject.demoUrl && (
                  <a 
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    {selectedProject.category === "Mobile App" ? (
                      <>
                        <IconBrandGooglePlay size={18} className="mr-2" />
                        <span>Google Play</span>
                      </>
                    ) : (
                      <>
                        <IconGlobe size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </>
                    )}
                  </a>
                )}
                
                {selectedProject.url && (
                  <a 
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center bg-gray-200 dark:bg-darkbg-lighter hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg transition-colors"
                  >
                    <IconExternalLink size={18} className="mr-2" />
                    <span>Project Details</span>
                  </a>
                )}
              </div>
              
              {/* Completion date */}
              {selectedProject.completionDate && (
                <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                  Completed on: {new Date(selectedProject.completionDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}