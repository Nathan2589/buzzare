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
    <section ref={ref} className="py-20 relative overflow-hidden" id="contact-section">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid-bg z-0 opacity-50"></div>
      
      {/* Animated VHS lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-scanlines"></div>
        <div className="absolute inset-0 vhs-flicker"></div>
      </div>
      
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
            <p className={`${russoOne.className} text-gray-200 text-center mb-6`}>
              Ready to bring your vision to life? Contact me for custom quotes on your animation projects.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="mailto:buzzareee@gmail.com"
                className="contact-button magenta-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                EMAIL ME
              </a>
              
              <a
                href="https://www.youtube.com/@buzzaree"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button cyan-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
                MY YOUTUBE
              </a>
            </div>
            
            {/* Twitter link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-4"
            >
              <a
                href="https://twitter.com/BuzzareYT"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
                <span className="text-[10px]">@BuzzareYT</span>
              </a>
            </motion.div>
          </div>
          
          <div className="mt-10 border-t border-[#00ffff]/20 pt-6">
            <h4 className={`${pressStart.className} text-sm mb-4 text-center text-[#00ffff]`}>
              PROJECT TYPES
            </h4>
            
            <div className="flex flex-wrap justify-center gap-3">
              {["FNAF Animations", "Character Models", "Cinematic Scenes", "VFX Integration"].map((tag, i) => (
                <span 
                  key={i}
                  className="project-tag"
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
      
      {/* Fixed CSS to eliminate hover glitches */}
      <style jsx global>{`
        .contact-button {
          font-family: var(--font-press-start);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          width: 100%;
          padding: 1rem 2rem;
          border-radius: 0.25rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          contain: layout;
          text-decoration: none;
          color: white;
        }
        
        .contact-button:hover {
          transform: scale(1.03);
        }
        
        .contact-button:active {
          transform: scale(0.97);
        }
        
        .magenta-button {
          background: linear-gradient(45deg, rgba(255,0,255,0.2), rgba(255,0,255,0.4));
          box-shadow: 0 0 15px rgba(255,0,255,0.3);
          border: 1px solid rgba(255,0,255,0.5);
        }
        
        .magenta-button:hover {
          box-shadow: 0 0 20px rgba(255,0,255,0.5);
          background: linear-gradient(45deg, rgba(255,0,255,0.3), rgba(255,0,255,0.5));
        }
        
        .cyan-button {
          background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(0,255,255,0.4));
          box-shadow: 0 0 15px rgba(0,255,255,0.3);
          border: 1px solid rgba(0,255,255,0.5);
        }
        
        .cyan-button:hover {
          box-shadow: 0 0 20px rgba(0,255,255,0.5);
          background: linear-gradient(45deg, rgba(0,255,255,0.3), rgba(0,255,255,0.5));
        }
        
        .social-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          color: rgba(255, 255, 255, 0.9);
          font-family: var(--font-press-start);
          padding: 0.75rem 1.5rem;
          transition: transform 0.3s ease, color 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          contain: content;
        }
        
        .social-link:hover {
          transform: scale(1.03);
          color: white;
        }
        
        .social-link:active {
          transform: scale(0.97);
        }
        
        .social-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1px;
          background: linear-gradient(to right, #ff00ff, #00ffff);
          transition: width 0.3s ease, left 0.3s ease;
        }
        
        .social-link:hover::after {
          width: 80%;
          left: 10%;
        }
        
        .project-tag {
          display: inline-block;
          background-color: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          color: rgb(0, 255, 255);
          font-family: var(--font-press-start);
          font-size: 0.75rem;
          transition: all 0.3s ease;
          cursor: default;
          contain: content;
        }
        
        .project-tag:hover {
          background-color: rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
        }
        
        @media (min-width: 768px) {
          .contact-button {
            width: auto;
          }
        }
      `}</style>
    </section>
  );
} 