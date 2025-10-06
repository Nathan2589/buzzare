"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { pressStart, russoOne } from "../fonts";
import DecryptedText from "./DecryptedText";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1,
    triggerOnce: true
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Listen for loading screen completion
    // The loading screen takes 2500ms to complete
    const loadingTimer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2600); // Add a slight buffer to ensure loading is complete
    
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Only start the hero animations after loading is complete
    if (loadingComplete) {
      const animationTimer = setTimeout(() => {
        setShouldAnimate(true);
      }, 300); // Short delay after loading screen disappears
      
      return () => clearTimeout(animationTimer);
    }
  }, [loadingComplete]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-28 relative min-h-screen flex items-center">
      {/* Subtle VHS effect overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-scanlines"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              className="mb-8"
              initial="hidden"
              animate={shouldAnimate ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Main headline */}
              <motion.div 
                variants={itemVariants} 
                className="mb-2 overflow-hidden"
              >
                <h1 className={`${pressStart.className} text-4xl md:text-5xl lg:text-6xl text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]`}>
                  <DecryptedText
                    text="BUZZARE"
                    speed={40}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="start"
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%"
                    animateOn={shouldAnimate ? "view" : "none"}
                    parentClassName="block"
                  />
                </h1>
              </motion.div>
              
              {/* Subtitle with profession */}
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h2 className={`${pressStart.className} text-2xl md:text-3xl text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]`}>
                  <DecryptedText
                    text="3D ARTIST & ANIMATOR"
                    speed={35}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="start"
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&@#$%"
                    animateOn={shouldAnimate ? "view" : "none"}
                    parentClassName="block"
                  />
                </h2>
              </motion.div>
              
              {/* Brief description */}
              <motion.div 
                variants={itemVariants}
                className="mb-10"
              >
                <p className={`${russoOne.className} text-xl text-gray-200 max-w-md`}>
                  Creating mind-blowing FNAF animations and pushing the boundaries of 3D.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Action buttons */}
            <motion.div 
              initial="hidden"
              animate={shouldAnimate ? "visible" : "hidden"}
              variants={containerVariants}
              transition={{ delayChildren: 1.2, staggerChildren: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <motion.a
                href="https://www.youtube.com/@buzzaree"
                target="_blank"
                rel="noopener noreferrer"
                className={`${pressStart.className} text-sm px-8 py-3 bg-[#ff00ff] hover:bg-[#ff00ff]/80 text-white rounded-md shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300 relative overflow-hidden group`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                variants={buttonVariants}
              >
                <span className="relative z-10">WATCH VIDEOS</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff]/80 to-[#ff00ff]/0 opacity-0 group-hover:opacity-50 blur-md -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
              </motion.a>
              
              <motion.a
                href="https://www.patreon.com/Buzzare/membership"
                target="_blank"
                rel="noopener noreferrer"
                className={`${pressStart.className} text-sm px-8 py-3 bg-transparent border-2 border-[#00ffff] hover:bg-[#00ffff]/10 text-[#00ffff] rounded-md shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 relative overflow-hidden group`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                variants={buttonVariants}
              >
                <span className="relative z-10">SUPPORT ME</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/30 to-[#00ffff]/0 opacity-0 group-hover:opacity-80 blur-md -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={shouldAnimate ? { opacity: 0, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 relative"
          >
            
                
                <Image
                  src="/OC for Website Adjusted.png"
                  alt="Buzzare 3D Character"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover relative z-10"
                  priority
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#ff00ff]/70 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20"
                  animate={{ opacity: [0, 0.15, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                ></motion.div>
              
          </motion.div>
        </div>
      </div>
    </section>
  );
}