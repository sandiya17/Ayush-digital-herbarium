import { Button } from "@/components/ui/button";
import { Search, Menu, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-healing-green animate-float" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AYUSH Garden
            </h1>
            <p className="text-xs text-muted-foreground">
              Virtual Herbal Experience
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-healing-green transition-colors">Home</Link>
          <Link to="/features" className="text-sm font-medium hover:text-healing-green transition-colors">Features</Link>
          <Link to="/tours" className="text-sm font-medium hover:text-healing-green transition-colors">Tours</Link>
          <Link to="/plantgallery" className="text-sm font-medium hover:text-healing-green transition-colors">Plant Gallery</Link>
          <Link to="/assistant" className="text-sm font-medium hover:text-healing-green transition-colors">AI Assistant</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="nature" size="sm" className="hidden md:flex">
            <Search className="h-4 w-4" />
            Search Plants
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
