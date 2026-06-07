import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Search, 
  MapPin, 
  MessageCircle, 
  Brain, 
  Heart,
  Microscope,
  BookOpen
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Interactive 3D Models",
    description: "Explore realistic 3D models of medicinal plants with zoom, rotate, and detailed anatomy views.",
    gradient: "from-healing-green to-primary"
  },
  {
    icon: Search,
    title: "Advanced Plant Database",
    description: "Search through 500+ medicinal plants with detailed botanical information and usage guides.",
    gradient: "from-ayush-gold to-accent"
  },
  {
    icon: MapPin,
    title: "Virtual Garden Tours",
    description: "Take guided tours through themed gardens focused on specific health conditions and treatments.",
    gradient: "from-earth-brown to-healing-green"
  },
  {
    icon: MessageCircle,
    title: "AI Herbal Assistant",
    description: "Chat with our AI expert for personalized plant recommendations and dosage guidance.",
    gradient: "from-primary to-ayush-gold"
  },
  {
    icon: Brain,
    title: "Medicine Prediction",
    description: "Get Ayurvedic medicine suggestions for skin diseases based on your symptoms.",
    gradient: "from-healing-green to-earth-brown"
  },
  {
    icon: Heart,
    title: "Wellness Tracking",
    description: "Track your herbal remedies, bookmark favorite plants, and monitor health improvements.",
    gradient: "from-ayush-gold to-healing-green"
  },
  {
    icon: Microscope,
    title: "Scientific Research",
    description: "Access peer-reviewed research papers and clinical studies on traditional medicine.",
    gradient: "from-earth-brown to-primary"
  },
  {
    icon: BookOpen,
    title: "Learning Modules",
    description: "Structured courses on Ayurveda, herbal preparation methods, and traditional healing.",
    gradient: "from-primary to-healing-green"
  }
];

export default function Features() {
  return (
    <div>
      <Header />
      <main className="p-6">
        {/* 👇 Section for Features */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Discover Traditional Healing
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our virtual herbal garden combines ancient AYUSH wisdom with cutting-edge technology 
                to create an immersive learning experience
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature) => (
                <Card 
                  key={feature.title} 
                  className="group hover:shadow-botanical transition-all duration-300 hover:-translate-y-1 animate-grow border-border/50"
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-healing-green transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Start Your Healing Journey Today
                </h3>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                  Join thousands of learners exploring the wisdom of traditional medicine 
                  through our innovative virtual platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="golden" size="lg" className="text-lg px-8">
                    Explore Plants Now
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
