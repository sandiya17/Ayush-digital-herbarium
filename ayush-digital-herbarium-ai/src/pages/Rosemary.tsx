import { useRef } from 'react';
import rosemary from "@/assets/rosemary.jpg";

interface PlantDetailsProps {}

const RosemaryPage: React.FC<PlantDetailsProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }
  };

  const plantData = {
    name: "Rosemary",
    scientificName: "Salvia rosmarinus",
    family: "Lamiaceae",
    commonNames: ["Dew of the Sea", "Polar Plant", "Compass Weed"],
    description:
      "Rosemary is a fragrant evergreen herb with needle-like leaves and white, pink, purple, or blue flowers. It is native to the Mediterranean region but is now cultivated worldwide for its culinary, medicinal, and ornamental uses. The plant has a distinctive aroma that is both piney and peppery, and it's known for its ability to improve memory and concentration.",
    medicinalUses: [
      "Improves memory and cognitive function",
      "Stimulates hair growth and reduces dandruff",
      "Relieves muscle pain and inflammation",
      "Enhances mood and reduces stress",
      "Supports digestive health and reduces bloating",
      "Boosts immune system function",
      "Contains antioxidants that fight free radicals",
      "May improve circulation and nervous system function",
    ],
    plantingTips: [
      "Climate: Prefers warm, Mediterranean climates (USDA zones 8-10)",
      "Soil: Well-draining, sandy or loamy soil with pH 6.0-7.0",
      "Sunlight: Full sun (6-8 hours daily)",
      "Planting: Start from cuttings or transplants rather than seeds",
      "Spacing: 24-36 inches between plants",
      "Watering: Drought-tolerant once established; avoid overwatering",
      "Pruning: Regular pruning encourages bushy growth",
      "Harvest: Snip stems as needed; best flavor before flowering",
    ],
    growingSeason: "Year-round in warm climates",
    maturityTime: "6-12 months for full growth",
    hardinessZones: "8-10",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">{plantData.name}</h1>
          <p className="text-xl text-green-600 italic">{plantData.scientificName}</p>
          <p className="text-green-500">Family: {plantData.family}</p>
          <div className="flex justify-center gap-2 mt-2">
            {plantData.commonNames.map((name, index) => (
              <span
                key={index}
                className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-xl flex items-center justify-center">
                <img
                  src={rosemary}
                  alt="Rosemary Plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-600">Growing Season:</span>
                  <span className="text-green-800 font-medium">{plantData.growingSeason}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600">Maturity Time:</span>
                  <span className="text-green-800 font-medium">{plantData.maturityTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600">Hardiness Zones:</span>
                  <span className="text-green-800 font-medium">{plantData.hardinessZones}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Description with Audio */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-green-800">Description</h3>
                <button
                  onClick={handlePlayAudio}
                  className="bg-green-100 hover:bg-green-200 p-2 rounded-full transition-colors duration-200"
                  aria-label="Play description audio"
                >
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <audio ref={audioRef} src="/audio/rosemary-description.mp4" />
              </div>
              <p className="text-green-700 leading-relaxed">{plantData.description}</p>
            </div>

            {/* Medicinal Uses */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Medicinal Uses & History
              </h3>
              <div className="space-y-3">
                {plantData.medicinalUses.map((use, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <p className="ml-3 text-green-700">{use}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p className="text-amber-800 text-sm">
                  <strong>Historical Note:</strong> Rosemary has been used since ancient
                  times for its medicinal and symbolic properties. The Greeks and Romans
                  associated rosemary with memory and remembrance, and students would wear
                  rosemary wreaths during exams. In the Middle Ages, it was used to ward off
                  evil spirits and plague. The name "rosemary" derives from the Latin "ros"
                  (dew) and "marinus" (sea), meaning "dew of the sea," as it often grew near
                  Mediterranean coasts. It was also traditionally used at weddings as a
                  symbol of fidelity and remembrance.
                </p>
              </div>
            </div>

            {/* Planting Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Tips for Planting at Home
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plantData.plantingTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-2 text-green-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosemaryPage;
