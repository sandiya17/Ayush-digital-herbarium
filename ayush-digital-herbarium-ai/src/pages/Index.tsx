import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/pages/Features";
import PlantGallery from "@/pages/PlantGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlantGallery />
      </main>
    </div>
  );
};

export default Index;
