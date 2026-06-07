import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PlantCard from "./PlantCard";
import { Search, Grid3X3, List } from "lucide-react";
import image from "@/assets/image.png";
import nee from "@/assets/nee.jpg";
import tur from "@/assets/rosemary.jpg";
import R from "@/assets/R.jpeg";
import aloe from "@/assets/aloe.jpg";
import brah from "@/assets/brah.jpg";
import rosemary from "@/assets/rosemary.jpg";
// Sample plant data - in a real app, this would come from an API
const samplePlants = [
  {
    id: "Basil",
    name: "Tulsi (Holy Basil)",
    scientificName: "Ocimum tenuiflorum",
    image: image,
    shortDescription:
      "Sacred herb known for its adaptogenic properties and spiritual significance in Ayurveda.",
    medicinalUses: [
      "Respiratory health",
      "Immune support",
      "Stress relief",
      "Antimicrobial",
    ],
    region: "India",
    rarity: "common" as const,
  },
{
    id: "Rosemary",
    name: "Rosemary",
    scientificName: "Salvia rosmarinus",
    image: rosemary,
    shortDescription:
      "Aromatic herb traditionally used for memory enhancement and culinary purposes.",
    medicinalUses: [
      "Memory improvement",
      "Hair growth",
      "Anti-inflammatory",
      "Digestive health",
    ],
    region: "Mediterranean",
    rarity: "common" as const,
  },
  {
    id: "neem",
    name: "Neem",
    scientificName: "Azadirachta indica",
    image: nee,
    shortDescription:
      "Nature's pharmacy tree with incredible healing and purifying properties.",
    medicinalUses: [
      "Skin health",
      "Antibacterial",
      "Blood purifier",
      "Dental care",
    ],
    region: "Indian Subcontinent",
    rarity: "common" as const,
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    image: R,
    shortDescription:
      "Powerful adaptogenic herb for stress relief and vitality enhancement.",
    medicinalUses: [
      "Stress relief",
      "Energy boost",
      "Sleep support",
      "Cognitive health",
    ],
    region: "India, Middle East",
    rarity: "uncommon" as const,
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis",
    image: aloe,
    shortDescription:
      "Succulent plant renowned for its soothing and healing gel.",
    medicinalUses: [
      "Skin healing",
      "Burns treatment",
      "Digestive aid",
      "Moisturizing",
    ],
    region: "Arabian Peninsula",
    rarity: "common" as const,
  },
  {
    id: "brahmi",
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    image: brah,
    shortDescription:
      "Memory-enhancing herb sacred to cognitive health and mental clarity.",
    medicinalUses: [
      "Memory enhancement",
      "Cognitive support",
      "Anxiety relief",
      "Neuroprotection",
    ],
    region: "India, Southeast Asia",
    rarity: "rare" as const,
  },
];

const PlantGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredPlants = samplePlants.filter((plant) => {
    const matchesSearch =
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.medicinalUses.some((use) =>
        use.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesFilter =
      selectedFilter === "all" || plant.rarity === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    // ✅ Added id="plants" so navbar link works
    <section id="plants" className="py-16 bg-gradient-nature">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Medicinal Plants
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the healing power of traditional AYUSH medicines through
            our comprehensive plant database
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 shadow-soft">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search plants, uses, or scientific names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Button
                variant={selectedFilter === "all" ? "nature" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("all")}
              >
                All Plants
              </Button>
              <Button
                variant={selectedFilter === "common" ? "nature" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("common")}
              >
                Common
              </Button>
              <Button
                variant={selectedFilter === "uncommon" ? "golden" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("uncommon")}
              >
                Uncommon
              </Button>
              <Button
                variant={selectedFilter === "rare" ? "destructive" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("rare")}
              >
                Rare
              </Button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border rounded-md">
              <Button
                variant={viewMode === "grid" ? "nature" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "nature" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredPlants.length} of {samplePlants.length} plants
          </p>
        </div>

        {/* Plants Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} {...plant} className="animate-grow" />
          ))}
        </div>

        {/* No Results */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No plants found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredPlants.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Plants
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlantGallery;
