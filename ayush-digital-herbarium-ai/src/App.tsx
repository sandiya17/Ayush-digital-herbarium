import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Tours from "./pages/Tours";
import PlantGallery from "./pages/PlantGallery";

// Chatbot Page
import Chatbot from "./Chatbot";

// Plant Detail Pages
import BasilPage from "./pages/Basil.tsx";
import RosemaryPage from "./pages/Rosemary.tsx";
import ChamomilePage from "./pages/Chamomile.tsx";
import ThymePage from "./pages/thyme.tsx";
import PeepalTreePage from "./pages/Peepal.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Navbar Pages */}
          <Route path="/features" element={<Features />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/plantgallery" element={<PlantGallery />} />
          <Route path="/assistant" element={<Chatbot />} />

          {/* Plant Detail Pages */}
          <Route path="/plants/basil" element={<BasilPage />} />
          <Route path="/plants/rosemary" element={<RosemaryPage />} />
          <Route path="/plants/chamomile" element={<ChamomilePage />} />
          <Route path="/plants/thyme" element={<ThymePage />} />
          <Route path="/plants/peepal" element={<PeepalTreePage />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
