"use client";
import React, { useState, useEffect } from 'react';
import { pressStart } from '../fonts';

export default function ClientBackground() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(loadingTimer);
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-[#0a001a] z-[100] flex flex-col items-center justify-center">
      {/* VHS static noise overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen z-10">
        <div className="w-full h-full bg-noise animate-noise" />
      </div>
      
      {/* Horizontal scan lines */}
      <div className="absolute inset-0 bg-scanlines z-20"></div>
      
      {/* Tracking lines */}
      <div className="absolute inset-0 z-30">
        <div className="tracking-line"></div>
      </div>
      
      {/* Retro grid */}
      <div className="absolute inset-0 z-5 grid-bg"></div>
      
      {/* Loading content */}
      <div className="relative z-40 text-center">
        <h1 className={`${pressStart.className} text-5xl md:text-7xl mb-8 glitch-text`}>
          <span className="text-[#ff00ff] drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">BUZZ</span>
          <span className="text-[#00ffff] drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">ARE</span>
        </h1>
        
        <div className={`${pressStart.className} vhs-text text-sm md:text-xl text-white tracking-widest`}>
          <span className="block mb-4 loading-text">LOADING</span>
          <span className="inline-block">
            <span className="animate-ellipsis">.</span>
            <span className="animate-ellipsis animation-delay-300">.</span>
            <span className="animate-ellipsis animation-delay-600">.</span>
          </span>
        </div>
        
        <div className={`${pressStart.className} mt-8 tape-counter text-xs md:text-sm text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]`}>
          INITIALIZING SYSTEM
        </div>
      </div>
    </div>
  );
}