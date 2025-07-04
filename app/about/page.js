import { Suspense } from "react";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import VideoBackground from '../components/VideoBackground';
import { pressStart } from "../fonts";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0016]">
      {/* Video Background with dark overlay */}
      <VideoBackground src="/new-background.mp4" opacity={0.7} />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <h1 className={`${pressStart.className} text-3xl md:text-4xl text-center mb-16 pt-12`}>
              <span className="text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">ABOUT</span>{" "}
              <span className="text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">ME</span>
            </h1>
            
            <Suspense fallback={<div className="h-[60vh] flex items-center justify-center text-white">Loading content...</div>}>
              <AboutContent />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}