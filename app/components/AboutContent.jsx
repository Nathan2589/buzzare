"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

import { russoOne, pressStart } from "../fonts";

export default function AboutContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section ref={ref} className="py-6">
      <div className="max-w-4xl mx-auto">
        {/* Bio card */}
        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-[#ff00ff]/30 rounded-xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className={`${russoOne.className} text-2xl md:text-3xl text-[#00ffff] mb-6 drop-shadow-[0_0_5px rgba(0,255,255,0.5)]`}>
                Hey There,
              </h2>
              
              <div className={`${pressStart.className} text-gray-300 space-y-4`}>
                <p>
                  I appreciate you dropping by! Join me as I try my absolute best to create some of the highest quality FNAF fan animations to ever grace the fandom, trust me when I say it's a journey you do NOT want to miss out on ;)
                </p>
                
                <p>
                  If you decide to join my Patreon, I guarantee you wont be disappointed! Depending on your tier choice you'll be offered a wide variety of different perks to sink your teeth into including exclusive behind the scenes sneak peeks of my upcoming projects, exclusive patreon-only discord server channels, high quality character renders, and SO much more.
                </p>
                
                <p>
                  Once again I appreciate your guys' support and I hope y'all enjoy!!
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-6"
            >
              <h3 className={`${pressStart.className} text-xl text-[#ff00ff] mb-3 drop-shadow-[0_0_5px rgba(255,0,255,0.5)]`}>
                Who am I?
              </h3>
              <ul className={`${russoOne.className} list-disc list-inside text-gray-300 space-y-1 pl-2`}>
                <li>Blender and VFX artist</li>
                <li>Creator of 'The Maintenance Archives' on YouTube</li>
                <li>Head animator for Division10LLC</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Connect section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className={`${pressStart.className} text-2xl font-bold text-white mb-6`}>
            CONNECT WITH ME
          </h3>
          
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://www.youtube.com/@buzzaree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff0000] transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span className={`${pressStart.className} text-sm mt-2`}>YouTube</span>
              </div>
            </motion.a>
            
            <motion.a
              href="https://www.patreon.com/Buzzare/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff424d] transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41M2 21.6H5.5V2.41H2V21.6Z" />
                </svg>
                <span className={`${pressStart.className} text-sm mt-2`}>Patreon</span>
              </div>
            </motion.a>
            
            <motion.a
              href="https://twitter.com/BuzzareYT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
                <span className={`${pressStart.className} text-sm mt-2`}>Twitter</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}