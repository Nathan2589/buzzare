"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pressStart } from "../fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className="fixed w-full z-50 transition-all duration-300 top-0"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top border with gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] relative">
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 z-10"></div>
      </div>
      
      {/* Main navbar with pixel border and grid background */}
      <div className={`bg-black/90 border-b-2 border-[#ff00ff]/60 relative ${scrolled ? "py-1" : "py-2"}`}>
        {/* VHS tracking lines effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20 animate-scan"></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-40 z-0"></div>
        
        {/* Scanlines effect */}
        <div className="absolute inset-0 bg-scanlines opacity-30 z-0"></div>
        
        {/* Glitch overlay */}
        <div className="absolute inset-0 glitch-overlay opacity-10 z-0"></div>
        
        <div className="container mx-auto flex justify-between items-center px-4 py-1 relative z-10">
          <div className="z-50">
            <Link href="/" className="relative inline-block group">
              <Image
                src="/logo1.png"
                alt="Buzzare Logo"
                width={120}
                height={40}
                className="drop-shadow-[0_0_8px_rgba(255,0,255,0.8)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,0,255,1)]"
                priority
              />
              <div className="absolute inset-0 glitch-effect opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            {["About", "Showcase"].map((item, index) => (
              <Link 
                key={index} 
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`${pressStart.className} text-xs px-4 py-2 text-white hover:text-[#00ffff] relative group`}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-[#ff00ff]/0 group-hover:bg-[#ff00ff]/20 transition-all duration-300 z-0 group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff]/50 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <button 
              onClick={scrollToContact} 
              className={`${pressStart.className} text-xs px-4 py-2 text-white hover:text-[#00ffff] relative group`}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-[#ff00ff]/0 group-hover:bg-[#ff00ff]/20 transition-all duration-300 z-0 group-hover:translate-y-0.5 group-hover:translate-x-0.5"></span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff]/50 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
          
          <div className="md:hidden z-50">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none relative group"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span className="absolute inset-0 bg-[#ff00ff]/0 group-hover:bg-[#ff00ff]/20 transition-all duration-300 z-0"></span>
            </button>
          </div>
        </div>
        
        {/* Bottom border effects */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#00ffff]/30"></div>
        <div className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-white/10"></div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* VHS distortion effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan"></div>
              <div className="absolute inset-0 vhs-flicker"></div>
            </div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            
            {/* Scanlines effect */}
            <div className="absolute inset-0 bg-scanlines opacity-40"></div>
            
            <motion.div 
              className="flex flex-col space-y-6 items-center relative z-10"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {["Home", "About", "Showcase"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`${pressStart.className} text-xl text-white hover:text-[#00ffff] relative group inline-block px-4 py-2`}
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute inset-0 bg-[#ff00ff]/0 group-hover:bg-[#ff00ff]/20 transition-all duration-300 z-0"></span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button 
                  onClick={scrollToContact}
                  className={`${pressStart.className} text-xl text-white hover:text-[#00ffff] relative group inline-block px-4 py-2`}
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] group-hover:w-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-[#ff00ff]/0 group-hover:bg-[#ff00ff]/20 transition-all duration-300 z-0"></span>
                </button>
              </motion.div>
              
              <motion.div
                className="pt-8 flex gap-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <a href="https://www.youtube.com/@buzzaree" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff0000] transition-colors group">
                  <div className="flex flex-col items-center relative">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    <span className={`${pressStart.className} text-sm mt-2`}>YouTube</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff0000] group-hover:w-full transition-all duration-300"></span>
                  </div>
                </a>
                <a href="https://www.patreon.com/Buzzare/membership" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff424d] transition-colors group">
                  <div className="flex flex-col items-center relative">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41M2 21.6H5.5V2.41H2V21.6Z" />
                    </svg>
                    <span className={`${pressStart.className} text-sm mt-2`}>Patreon</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff424d] group-hover:w-full transition-all duration-300"></span>
                  </div>
                </a>
                <a href="https://twitter.com/BuzzareYT" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1DA1F2] transition-colors group">
                  <div className="flex flex-col items-center relative">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                    <span className={`${pressStart.className} text-sm mt-2`}>Twitter</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1DA1F2] group-hover:w-full transition-all duration-300"></span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}