import { useState, useRef } from 'react';

interface PlantDetailsProps {
  // Props can be added if needed for dynamic data
}

const PeepalTreePage: React.FC<PlantDetailsProps> = () => {
  const [show3DModel, setShow3DModel] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }
  };

  const plantData = {
    name: "Peepal Tree",
    scientificName: "Ficus religiosa",
    family: "Moraceae",
    commonNames: ["Sacred Fig", "Bodhi Tree"],
    description: "The Peepal Tree is a large, fast-growing deciduous tree with heart-shaped leaves and a wide-spreading canopy. It is considered sacred in Hinduism, Buddhism, and Jainism, and is often planted near temples and religious sites. The tree is known for its oxygen-producing capabilities and its unique ability to release oxygen even at night.",
    medicinalUses: [
      "Treats respiratory disorders like asthma and bronchitis",
      "Helps manage diabetes by lowering blood sugar levels",
      "Improves digestive health and treats constipation",
      "Contains antioxidants that fight inflammation",
      "Heals skin infections and wounds when applied topically",
      "Reduces inflammation and pain in joints",
      "Helps in treating gum diseases and toothaches",
      "Used in Ayurveda for its anti-aging properties"
    ],
    plantingTips: [
      "Climate: Thrives in tropical and subtropical climates",
      "Soil: Prefers well-drained loamy soil but adapts to various soil types",
      "Sunlight: Requires full sunlight for optimal growth",
      "Planting: Best grown from seeds or cuttings",
      "Spacing: Needs ample space (30-50 feet from structures)",
      "Watering: Regular watering when young, drought-tolerant when mature",
      "Growth: Fast-growing, can reach 30m in height",
      "Special Note: Considered sacred in many cultures, often planted in temples"
    ],
    growingSeason: "Year-round in tropical climates",
    maturityTime: "5-7 years to full maturity",
    hardinessZones: "10-12"
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
              <span key={index} className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and 3D Model */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-emerald-300 rounded-xl flex items-center justify-center">
                <span className="text-6xl">🌳</span>
              </div>
              
              {/* 3D Model Section */}
              <div className="mt-6">
                <button
                  onClick={() => setShow3DModel(!show3DModel)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                  {show3DModel ? 'Hide 3D Model' : 'View 3D Model'}
                </button>

                {show3DModel && (
                  <div className="mt-4 bg-gray-900 rounded-xl p-4 aspect-video flex items-center justify-center">
                    {/* Replace this with your actual 3D model component */}
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">🌳</div>
                      <p className="text-sm opacity-75">3D Model of Peepal Tree</p>
                      <p className="text-xs opacity-50 mt-2">(Integrate your 3D model here)</p>
                    </div>
                  </div>
                )}
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
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <audio ref={audioRef} src="/audio/peepal-tree-description.mp4" />
              </div>
              <p className="text-green-700 leading-relaxed">{plantData.description}</p>
            </div>

            {/* Medicinal Uses */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Medicinal Uses & History</h3>
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
                  <strong>Historical Significance:</strong> The Peepal Tree is one of the most sacred trees in Indian culture. 
                  It is believed that Lord Buddha attained enlightenment under a Peepal Tree in Bodh Gaya, making it known as 
                  the Bodhi Tree. In Hinduism, it is considered the abode of Lord Vishnu and Goddess Lakshmi. The tree is also 
                  mentioned in ancient Ayurvedic texts for its numerous medicinal properties.
                </p>
              </div>
            </div>

            {/* Planting Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Tips for Planting at Home</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plantData.plantingTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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

export default PeepalTreePage;