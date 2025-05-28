import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  IconMenu2,
  IconX,
  IconArrowUp,
  IconMoon,
  IconSun,
} from '@tabler/icons-react';

// Interface for skill items
interface SkillItem {
  name: string;
  icon: string;
  color?: string;
}

// Interface for skill categories
interface SkillCategory {
  title: string;
  items: SkillItem[];
}

const SkillsPage = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Skills data
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      items: [
        { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ]
    },
    {
      title: "Android",
      items: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "XML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      ]
    },
    {
      title: "Others",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      ]
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
    <div className="min-h-screen bg-gray-50 dark:bg-darkbg text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Head>
        <title>My Skills | Muhammad Jundy Rabbani</title>
        <link rel="icon" href="https://i.supa.codes/HDlaef" />
        <meta name="description" content="Melihat skill Muhammad Jundy Rabbani dalam bidang IT dan multimedia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts sudah dipindahkan ke _document.tsx */}
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
                <Link href="/experience" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium text-sm transition-colors duration-200">
                  Experience
                </Link>
                <Link href="/skill" className="nav-link text-primary font-medium text-sm transition-colors duration-200">
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
              <Link href="/experience" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-darkbg text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200">
                Experience
              </Link>
              <Link href="/skill" className="block px-3 py-2 rounded-md bg-primary/10 text-primary font-medium transition-colors duration-200">
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
            Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my skills on which I have been working on for the past 2 years.
          </p>
        </section>

        {/* Skills Section */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-darkbg-card rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 fade-in-section"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-quicksand">
                  {category.title}
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center bg-gray-100 dark:bg-darkbg-lighter rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div className="w-8 h-8 flex items-center justify-center mr-2">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium font-quicksand">{skill.name}</span>
                    </div>
                  ))}
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

export default SkillsPage; 