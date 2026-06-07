import { useState, useRef } from 'react';

interface PlantDetailsProps {
  // Props can be added if needed for dynamic data
}

const BasilPage: React.FC<PlantDetailsProps> = () => {
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
    name: "Basil",
    scientificName: "Ocimum basilicum",
    family: "Lamiaceae",
    commonNames: ["Sweet Basil", "Great Basil", "Saint Joseph's Wort"],
    description: "Basil is a highly aromatic annual herb with bright green, oval-shaped leaves and small white flowers. It is widely cultivated for its culinary uses, particularly in Mediterranean and Asian cuisines. The plant has a sweet, slightly peppery flavor with notes of mint and clove, and is known for its distinctive fragrance that intensifies when the leaves are crushed.",
    medicinalUses: [
      "Reduces inflammation and oxidative stress",
      "Fights bacterial infections with natural antimicrobial properties",
      "Supports liver function and detoxification",
      "Helps manage blood sugar levels in diabetics",
      "Reduces stress and anxiety through adaptogenic properties",
      "Supports cardiovascular health by managing cholesterol",
      "Relieves nausea and digestive discomfort",
      "Contains antioxidants that protect against cellular damage"
    ],
    plantingTips: [
      "Climate: Prefers warm temperatures (USDA zones 4-10 as annual)",
      "Soil: Well-draining, fertile soil with pH 6.0-7.5",
      "Sunlight: Full sun (6-8 hours daily)",
      "Planting: Start seeds indoors 6 weeks before last frost or direct sow",
      "Spacing: 12-18 inches between plants",
      "Watering: Keep soil consistently moist but not waterlogged",
      "Pruning: Pinch flower buds to encourage leaf production",
      "Harvest: Pick leaves regularly from the top to promote bushy growth"
    ],
    growingSeason: "Spring to Fall",
    maturityTime: "60-90 days from seed",
    hardinessZones: "10-11 (perennial), 4-9 (annual)"
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
                <span className="text-6xl">🌿</span>
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
                      <div className="text-4xl mb-2">🌿</div>
                      <p className="text-sm opacity-75">3D Model of Basil Plant</p>
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
                <audio ref={audioRef} src="/audio/basil-description.mp4" />
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
                  <strong>Historical Note:</strong> Basil has a rich history dating back over 5,000 years. It originated in India and was considered sacred in Hindu tradition, often used in religious ceremonies and placed in the hands of the dead to ensure safe passage to the afterlife. The ancient Greeks called it "basileus" (king), believing only the king himself should harvest it with a golden sickle. In Italy, basil became a symbol of love—a pot of basil on a balcony meant a woman was ready to receive her suitor. Throughout history, it has been associated with both protection and love in various cultures.
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

export default BasilPage;