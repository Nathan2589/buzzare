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