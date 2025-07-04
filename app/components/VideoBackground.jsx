"use client";
import React, { useRef, useEffect, useState } from 'react';
import { pressStart } from '../fonts';


export default function VideoBackground({ src, opacity = 0.5 }) {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      // Check if video is already loaded (handles refresh case)
      if (videoRef.current.readyState >= 3) {
        setIsLoaded(true);
      }
      
      // Force play on load
      const playVideo = async () => {
        try {
          await videoRef.current.play();
          console.log("Video playing successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
          // Set loaded to true even if there's an error playing
          setIsLoaded(true);
        }
      };
      
      playVideo();
      
      // Safety timeout - ensure loading screen disappears after 5 seconds max
      const safetyTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 5000);
      
      return () => clearTimeout(safetyTimer);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#0a001a] flex items-center justify-center overflow-hidden">
          {/* VHS static noise overlay */}
          <div className="absolute inset-0 opacity-15 mix-blend-screen z-10 vhs-static"></div>
          
          {/* Horizontal scan lines */}
          <div className="absolute inset-0 bg-scanlines z-20"></div>
          
          {/* RGB color split effect */}
          <div className="absolute inset-0 z-30 rgb-split"></div>
          
          {/* Tracking lines */}
          <div className="absolute inset-0 z-30 tracking-lines"></div>
          
          {/* VHS loading text */}
          <div className="relative z-40 text-2xl text-center">
            <div className={`${pressStart.className} vhs-text text-white tracking-widest`}>
              <span className="block mb-2 text-[#ff00ff] drop-shadow-[0_0_5px rgba(255,0,255,0.7)] animate-pulse">
                INSERTING TAPE
              </span>
              <span className="tracking-dots inline-block">
                <span className="animate-ellipsis">.</span>
                <span className="animate-ellipsis animation-delay-300">.</span>
                <span className="animate-ellipsis animation-delay-600">.</span>
              </span>
            </div>
            <div className={`${pressStart.className} mt-4 tape-counter font-mono text-sm text-[#00ffff]`}>
              00:00:00
            </div>
          </div>
        </div>
      )}
      <video 
        ref={videoRef}
        className="absolute object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => {
          setIsLoaded(true);
          console.log("Video loaded successfully");
        }}
        onCanPlayThrough={() => {
          setIsLoaded(true);
          console.log("Video can play through");
        }}
      >
        <source src={'/background.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black z-[1]" 
        style={{ opacity: opacity }}
      ></div>
    </div>
  );
}