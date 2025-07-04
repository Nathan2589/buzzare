import { Suspense } from "react";
import ClientBackground from "./components/ClientBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AccomplishmentsSection from "./components/AccomplishmentsSection";
import YoutubeFeature from "./components/YoutubeFeature";
import ContactSection from "./components/ContactSection";
import VideoBackground from './components/VideoBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Loading screen */}
      <ClientBackground />
      
      {/* Video Background with 70% dark overlay */}
      <VideoBackground src="/new-background.mp4" opacity={0.75} />
      
      {/* Content - with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          
          <AccomplishmentsSection />
          
          <YoutubeFeature />
          
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
