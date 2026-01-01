import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PhotoGallery from "@/components/PhotoGallery";
import DiarySection from "@/components/DiarySection";
import VideoGallery from "@/components/VideoGallery";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

function App() {
  return (
    <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <PhotoGallery />
            <DiarySection />
            <VideoGallery />
            <PortfolioSection />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    
  );
}

export default App;
