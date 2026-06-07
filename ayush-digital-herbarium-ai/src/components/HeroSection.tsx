import { Button } from "@/components/ui/button";
import { Play, Sparkles, Search } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-healing-green/80 via-primary/60 to-earth-brown/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-ayush-gold/20 backdrop-blur-sm border border-ayush-gold/30 rounded-full px-4 py-2 animate-grow">
            <Sparkles className="h-4 w-4 text-ayush-gold" />
            <span className="text-sm font-medium text-ayush-gold-light">
              Explore Traditional AYUSH Medicine
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Virtual
            <span className="block bg-gradient-golden bg-clip-text text-transparent">
              Herbal Garden
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover the healing power of traditional medicinal plants through immersive 3D experiences. 
            Learn about Ayurveda, explore herbal remedies, and connect with ancient wisdom.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center py-8">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-ayush-gold">500+</div>
              <div className="text-sm text-gray-300">Medicinal Plants</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-ayush-gold">50+</div>
              <div className="text-sm text-gray-300">Virtual Tours</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-ayush-gold">10K+</div>
              <div className="text-sm text-gray-300">Users Learning</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              <Play className="h-5 w-5" />
              Start Virtual Tour
            </Button>
            <Button variant="golden" size="lg" className="text-lg px-8">
              <Search className="h-5 w-5" />
              Explore Plants
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ayush-gold/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-healing-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-ayush-gold/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;