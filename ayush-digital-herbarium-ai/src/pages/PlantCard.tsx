import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Share2, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";  // ✅ added import

interface PlantCardProps {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  shortDescription: string;
  medicinalUses: string[];
  region: string;
  rarity: "common" | "uncommon" | "rare";
  className?: string;
}

const PlantCard = ({
  id,
  name,
  scientificName,
  image,
  shortDescription,
  medicinalUses,
  region,
  rarity,
  className,
}: PlantCardProps) => {
  const rarityColors = {
    common: "bg-healing-green/20 text-healing-green border-healing-green/30",
    uncommon: "bg-ayush-gold/20 text-ayush-gold border-ayush-gold/30",
    rare: "bg-destructive/20 text-destructive border-destructive/30",
  };

  return (
    <Card
      className={cn(
        "group hover:shadow-botanical transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm overflow-hidden",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <Badge className={rarityColors[rarity]}>
              <Leaf className="h-3 w-3 mr-1" />
              {rarity}
            </Badge>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Region Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-foreground">
            {region}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-healing-green group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        <p className="text-sm italic text-muted-foreground">
          {scientificName}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {shortDescription}
        </p>

        {/* Medicinal Uses */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide">
            Medicinal Uses
          </h4>
          <div className="flex flex-wrap gap-1">
            {medicinalUses.slice(0, 3).map((use, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {use}
              </Badge>
            ))}
            {medicinalUses.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{medicinalUses.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* ✅ Fixed Explore Plant Button */}
        <Button variant="nature" className="w-full mt-4" asChild>
          <Link to={`/plants/${id}`}>
            <Eye className="h-4 w-4" />
            Explore Plant
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
