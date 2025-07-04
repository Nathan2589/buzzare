"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { pressStart, russoOne } from "../fonts";


export default function YoutubeFeature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className={`${pressStart.className} text-white text-center text-3xl mb-12 drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Latest Creation
        </motion.h2>
        
        <motion.div
          className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm border border-[#ff00ff]/30 rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative aspect-video">
            <iframe width="900" height="500" src="https://www.youtube.com/embed/kSYN8Ez1YpY?si=_a1f0NDp7nOj9F34" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          
          <div className="p-6">
            <h3 className={`${russoOne.className} text-2xl text-white mb-2`}>My Recent Production</h3>
            <p className={`${russoOne.className} text-gray-300`}>Check out my latest 3D animation project using motion capture technology to create an immersive feel</p>
            
            <a 
              href="https://www.youtube.com/@buzzaree" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${pressStart.className} text-xs inline-block mt-6 text-[#ff00ff] hover:text-[#00ffff] transition-colors`}
            >
              View More on YouTube →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
