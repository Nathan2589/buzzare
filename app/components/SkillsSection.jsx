"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { pressStart, russoOne } from "../fonts";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const services = [
    {
      title: "High-Quality 3D Animation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M12 3a9 9 0 0 0 0 18 9 9 0 0 0 0-18Z"></path>
          <path d="m12 3 2 8h6l-5 4 2 7-5-3-5 3 2-7-5-4h6Z"></path>
        </svg>
      ),
      description: "Breathtaking animations using advanced techniques to bring your characters and scenes to life with fluid, realistic movements."
    },
    {
      title: "Motion Capture Integration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M15 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"></path>
          <path d="M7 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"></path>
          <path d="m5 19-3-3 3-3"></path>
          <path d="m19 3 3 3-3 3"></path>
          <path d="M8.5 12.5 5 16"></path>
          <path d="M15.5 12.5 19 16"></path>
          <path d="M12 16v5"></path>
        </svg>
      ),
      description: "Utilizing advanced motion capture technology to create ultra-realistic human movements, expressions, and interactions."
    },
    {
      title: "Custom Character & Environment Design",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
          <path d="M9.6 17.1c0 .7.7 1.9 2.4 1.9s2.4-1.2 2.4-1.9"></path>
          <path d="M8 2 4 6"></path>
          <path d="m16 2 4 4"></path>
        </svg>
      ),
      description: "From concept to execution, creating stunning characters with personality and detailed environments that enhance your story."
    },
    {
      title: "Advanced VFX & Compositing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      description: "State-of-the-art visual effects including particle systems, dynamic simulations, and seamless compositing for cinematic quality."
    },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid-bg z-0 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className={`${pressStart.className} text-3xl md:text-4xl text-center mb-4`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="cyan-glow">HIRE</span>{" "}
          <span className="magenta-glow">BUZZARE</span>
        </motion.h2>
        
        <motion.p 
          className={`${russoOne.className} text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Elevate your project with cutting-edge 3D animation services tailored to your vision
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
        <motion.div 
              key={index}
              className="card h-full"
              initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(255, 0, 255, 0.3)"
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-cyan-glow">{service.icon}</div>
                <h3 className={`${pressStart.className} text-lg mb-4 scanline-text`}>{service.title}</h3>
                <p className="text-gray-300 flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="max-w-3xl mx-auto backdrop-blur-sm bg-black/60 border border-[#00ffff]/30 rounded-xl p-8 pixel-border"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className={`${pressStart.className} text-2xl mb-6 text-center cyan-glow`}>
            Get In Touch
          </h3>
          
          <div className="space-y-6">
            <p className="text-gray-200 text-center mb-6">
              Ready to bring your vision to life? Contact me for custom quotes on your animation projects.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <motion.a
                href="mailto:contact@buzzare.com"
                className="retro-button bg-[#ff00ff]/20 hover:bg-[#ff00ff]/40 py-3 px-6 text-white font-bold transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email Me
              </motion.a>
              
              <motion.a
                href="https://youtube.com/buzzare"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button bg-[#00ffff]/20 hover:bg-[#00ffff]/40 py-3 px-6 text-white font-bold transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
                My YouTube
              </motion.a>
            </div>
          </div>
          
          <div className="mt-10 border-t border-[#00ffff]/20 pt-6">
            <h4 className={`${pressStart.className} text-sm mb-4 text-center text-[#00ffff]`}>
              PROJECT TYPES
            </h4>
            
            <div className="flex flex-wrap justify-center gap-3">
              {["FNAF Animations", "Character Models", "Game Assets", "Cinematic Scenes", "VFX Integration"].map((tag, i) => (
                <span 
                  key={i}
                  className="inline-block bg-[#00ffff]/10 border border-[#00ffff]/30 px-3 py-1 text-sm rounded-md text-[#00ffff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className={`${pressStart.className} text-sm text-gray-400`}>
            <span className="text-[#ff00ff]">FAST</span> TURNAROUND • <span className="text-[#00ffff]">PROFESSIONAL</span> QUALITY • <span className="text-[#ff00ff]">CREATIVE</span> SOLUTIONS
          </p>
        </motion.div>
      </div>
    </section>
  );
}