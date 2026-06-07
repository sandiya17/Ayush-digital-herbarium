"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// ✅ Import your background image
import bgtour from "../assets/Bgtour.jpg";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={2} />;
}

export default function Tours() {
  const [selected, setSelected] = useState<string | null>(null);

  const plants = [
    { id: "chamomile", name: "Chamomile", model: "/models/chamomile.glb" },
    { id: "aloe", name: "Aloe Vera", model: "/models/aloe_vera.glb" },
    { id: "peepal", name: "Peepal", model: "/models/peepal_tree.glb" },
    { id: "ashwagandha", name: "Ashwagandha", model: "/models/Ahwagandha.glb" },
    { id: "lavender", name: "Lavandula angustifolia", model: "/models/flower.glb" },
    { id: "neem", name: "Neem", model: "/models/neem export.glb" },

    // ✅ Newly added plants
    { id: "rosemary", name: "Rosemary", model: "/models/rosemary.glb" },
    { id: "basil", name: "Basil", model: "/models/basil.glb" },
    { id: "coriander", name: "Coriander", model: "/models/coriander.glb" },
    { id: "thyme", name: "Thyme", model: "/models/thyme.glb" },
    { id: "dandelion", name: "Dandelion", model: "/models/Dandelion.glb" },
    { id: "hibiscus", name: "Hibiscus", model: "/models/hibis.glb" },
  ];

  // Preload all models for faster loading
  plants.forEach((plant) => useGLTF.preload(plant.model));

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgtour})` }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Ayush Digital Herbarium
      </h1>

      {/* Plant Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8 w-full max-w-5xl">
        {plants.map((plant) => (
          <button
            key={plant.id}
            onClick={() => setSelected(plant.model)}
            className="p-6 bg-green-200/90 text-gray-800 font-medium rounded-xl shadow hover:bg-green-300 transition"
          >
            {plant.name}
          </button>
        ))}
      </div>

      {/* 3D Viewer */}
      <div className="w-full max-w-5xl h-[500px] bg-gray-100/90 rounded-xl shadow">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls />
          {selected && <Model url={selected} />}
        </Canvas>
      </div>
    </div>
  );
}
