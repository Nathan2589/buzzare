import { Suspense } from "react";
import Navbar from "../components/Navbar";
import VideoBackground from "../components/VideoBackground";
import { pressStart } from "../fonts";
import dynamic from "next/dynamic";

// Use dynamic import with no SSR for the video component
const AnimationShowcase = dynamic(() => import("../components/AnimationShowcase"), {
  ssr: false
});

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#0a0016]">
      {/* Video Background with dark overlay */}
      <VideoBackground src="/new-background.mp4" opacity={0.8} />
      
      {/* VHS effects overlay */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-scanlines opacity-20"></div>
        <div className="absolute inset-0 vhs-flicker opacity-10"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-36 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-4">
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#ff00ff]/70"></div>
              <h1 className={`${pressStart.className} text-3xl md:text-4xl text-center mx-4`}>
                <span className="text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">ANIMATION</span>{" "}
                <span className="text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">SHOWCASE</span>
              </h1>
              <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#00ffff]/70"></div>
            </div>
            
            <p className={`${pressStart.className} text-sm text-center text-gray-400 max-w-2xl mx-auto mb-12`}>
              Explore these exclusive animation clips showcasing my cinematic 3D skills
            </p>
            
            <Suspense fallback={
              <div className="h-[60vh] flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="loader mb-4"></span>
                  <div className={`${pressStart.className} text-sm text-[#ff00ff] animate-pulse`}>
                    LOADING ANIMATIONS...
                  </div>
                </div>
              </div>
            }>
              <AnimationShowcase />
            </Suspense>
          </div>
        </main>
        
        {/* CRT edge effect */}
        <div className="fixed top-0 left-0 right-0 h-[4px] bg-black z-50"></div>
        <div className="fixed bottom-0 left-0 right-0 h-[4px] bg-black z-50"></div>
        <div className="fixed top-0 bottom-0 left-0 w-[4px] bg-black z-50"></div>
        <div className="fixed top-0 bottom-0 right-0 w-[4px] bg-black z-50"></div>
        
        {/* CRT corner rounded effect */}
        <div className="fixed top-0 left-0 w-[20px] h-[20px] bg-black rounded-br-lg z-50"></div>
        <div className="fixed top-0 right-0 w-[20px] h-[20px] bg-black rounded-bl-lg z-50"></div>
        <div className="fixed bottom-0 left-0 w-[20px] h-[20px] bg-black rounded-tr-lg z-50"></div>
        <div className="fixed bottom-0 right-0 w-[20px] h-[20px] bg-black rounded-tl-lg z-50"></div>
      </div>
    </div>
  );
}