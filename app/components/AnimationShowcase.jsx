"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pressStart, russoOne } from "../fonts";

// Animation clips data
const ANIMATION_CLIPS = [
  {
    id: 1,
    title: "Realistic Camera Movements",
    description: "This clip shows off the camera tracking technology behind my realistic handheld camera movements",
    file: "/website clip 29759-10227.mp4",
    color: "#ff00ff" // Magenta theme
  },
  {
    id: 2,
    title: "Environment Building",
    description: "This clip demonstrates my ability to create immersive and cinematic environments",
    file: "/website clip 52649-2804.mp4",
    color: "#00ffff" // Cyan theme
  },
  {
    id: 3,
    title: "ANIMATION 03",
    description: "Description text for Animation 03. This is a placeholder for custom text.",
    file: "/website clip 63356-3687.mp4",
    color: "#ff00ff" // Magenta theme
  },
  {
    id: 4,
    title: "Cinematic Lighting",
    description: "This clip shows off my rich understanding of how to use lighting effectively to immerse viewers in jarring scenes",
    file: "/website clip 78294-8485.mp4",
    color: "#00ffff" // Cyan theme
  }
];

export default function AnimationShowcase() {
  const [selectedClip, setSelectedClip] = useState(ANIMATION_CLIPS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [hoveredClip, setHoveredClip] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  const videoRef = useRef(null);
  
  // Handle video loading state
  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        setIsLoading(false);
        // Add this video to our set of loaded videos
        setLoadedVideos(prev => new Set(prev).add(selectedClip.id));
      };
      
      const handlePlay = () => {
        // When video starts playing, hide the loading indicator
        setIsLoading(false);
      };
      
      // Only show loading on initial load or changing to a new clip
      if (loadedVideos.has(selectedClip.id)) {
        setIsLoading(false);
      }
      
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.addEventListener('play', handlePlay);
      
      return () => {
        videoRef.current?.removeEventListener('loadeddata', handleLoadedData);
        videoRef.current?.removeEventListener('play', handlePlay);
      };
    }
  }, [selectedClip, loadedVideos]);
  
  // Reset loading state when clip changes to a new one
  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }
    
    // Only show loading if we haven't loaded this video before
    if (!loadedVideos.has(selectedClip.id)) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [selectedClip, loadedVideos, isInitialLoad]);
  
  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        // Always hide loading indicator when manually playing
        setIsLoading(false); 
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  // Handle clip selection
  const handleSelectClip = (clip) => {
    // Check if we're selecting the same clip
    const isSameClip = selectedClip.id === clip.id;
    
    // Never show loading indicator when selecting the same clip
    if (isSameClip) {
      setIsLoading(false);
      
      // If same clip and video exists, reset it to beginning
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
    } else {
      // Only show loading if this clip hasn't been loaded before
      setIsLoading(!loadedVideos.has(clip.id));
    }
    
    setSelectedClip(clip);
    setIsPlaying(false);
  };

  return (
    <div className="animation-showcase relative">
      {/* Main display area - with reduced max width */}
      <div className="relative rounded-lg overflow-hidden border-2 border-[#ff00ff]/50 bg-black/40 backdrop-blur-sm mb-12 max-w-3xl mx-auto">
        {/* Video distortion effects */}
        <div className="absolute inset-0 z-0 bg-scanlines opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 vhs-flicker pointer-events-none"></div>
        
        {/* Main video player */}
        <div className="relative aspect-video w-full mx-auto">
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/70 z-20"
              >
                <div className="flex flex-col items-center">
                  <span className="loader mb-4"></span>
                  <p className={`${pressStart.className} text-xs text-[#ff00ff] animate-pulse`}>
                    LOADING CLIP...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <video 
            ref={videoRef}
            src={selectedClip.file}
            className="w-full h-full object-contain"
            onClick={togglePlayPause}
            loop
            playsInline
          />
          
          {/* Glitch effects container */}
          <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ff00ff]/50"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ffff]/50"></div>
            <div className="tracking-line"></div>
          </div>
          
          {/* Video controls overlay - Updated with pixelated style */}
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
            onClick={togglePlayPause}
          >
            {!isPlaying && !isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-black/70 backdrop-blur-sm p-8 rounded"
              >
                <div className={`${pressStart.className} flex items-center text-gray-300`}>
                  <span className="text-2xl md:text-3xl mr-3">PLAY</span>
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[18px] border-l-gray-300 ml-1 mt-1"></div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Video information */}
        <div className="p-6 bg-black/60">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 
                className={`${pressStart.className} text-xl md:text-2xl mb-2`}
                style={{ color: selectedClip.color, textShadow: `0 0 10px ${selectedClip.color}80` }}
              >
                {selectedClip.title}
              </h2>
              <p className={`${russoOne.className} text-gray-300 max-w-2xl`}>
                {selectedClip.description}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={togglePlayPause}
                className={`${pressStart.className} text-xs px-4 py-2 bg-transparent border border-[#ff00ff] hover:bg-[#ff00ff]/20 text-white rounded transition-all duration-300 group`}
              >
                {isPlaying ? (
                  <>
                    <span className="relative z-10">PAUSE</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff00ff] group-hover:w-0 transition-all duration-300"></span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">PLAY</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff00ff] group-hover:w-full transition-all duration-300"></span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Clip selector grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {ANIMATION_CLIPS.map((clip) => (
          <motion.div
            key={clip.id}
            onClick={() => handleSelectClip(clip)}
            onMouseEnter={() => setHoveredClip(clip.id)}
            onMouseLeave={() => setHoveredClip(null)}
            className={`relative cursor-pointer rounded border-2 transition-all duration-300 overflow-hidden ${
              selectedClip.id === clip.id 
                ? 'border-[#ff00ff] shadow-[0_0_15px_rgba(255,0,255,0.3)]' 
                : 'border-[#ff00ff]/20 hover:border-[#ff00ff]/60'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Thumbnail */}
            <div className="aspect-video relative">
              <video 
                src={clip.file}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay={hoveredClip === clip.id}
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-300 ${
                hoveredClip === clip.id ? 'opacity-60' : 'opacity-80'
              }`}></div>
              
              {/* VHS effect */}
              <div className="absolute inset-0 bg-scanlines opacity-30 pointer-events-none"></div>
              
              {/* Selection indicator */}
              {selectedClip.id === clip.id && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff00ff] animate-pulse shadow-[0_0_8px_rgba(255,0,255,0.8)]"></div>
                </div>
              )}
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 
                  className={`${pressStart.className} text-sm`}
                  style={{ color: clip.color, textShadow: `0 0 8px ${clip.color}80` }}
                >
                  {clip.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Technical details section */}
      <div className="mt-16 border-t border-[#ff00ff]/20 pt-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className={`${pressStart.className} text-[#00ffff] text-sm mb-3`}>ANIMATION</h4>
            <p className={`${russoOne.className} text-gray-300`}>
              Custom rigged and animated characters with meticulous attention to mechanical details.
            </p>
          </div>
          <div className="text-center">
            <h4 className={`${pressStart.className} text-[#ff00ff] text-sm mb-3`}>LIGHTING</h4>
            <p className={`${russoOne.className} text-gray-300`}>
              Atmospheric horror lighting with dynamic shadows to create the perfect tension.
            </p>
          </div>
          <div className="text-center">
            <h4 className={`${pressStart.className} text-[#00ffff] text-sm mb-3`}>RENDERING</h4>
            <p className={`${russoOne.className} text-gray-300`}>
              High-quality renders with advanced materials and textures for photorealistic results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 