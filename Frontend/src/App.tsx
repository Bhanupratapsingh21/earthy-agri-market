
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import NotFound from "./pages/NotFound";
import { SessionProvider } from "./store/store";
import ComingSoon from "./pages/ComingSoon";
// Service pages
import CommodityTrade from "./pages/services/CommodityTrade";
import KrishiSahayakAI from "./pages/services/KrishiSahayakAI";
import Nuvetra from "./pages/services/Nuvetra";
import Fintrin from "./pages/services/Fintrin";
import TestCertification from "./pages/services/TestCertification";
import StorageColdStorage from "./pages/services/StorageColdStorage";
import TransportCalculator from "./pages/services/TransportCalculator";
import SeedsFertilizerStore from "./pages/services/SeedsFertilizerStore";
import ToolsMachinery from "./pages/services/ToolsMachinery";
import MandiBhav from "./pages/services/MandiBhav";
import AgriNewsSchemes from "./pages/services/AgriNewsSchemes";
import KCCAgricultureLoans from "./pages/services/KCCAgricultureLoans";
import AgriCareSupport from "./pages/services/AgriCareSupport";
//Crops
import AddCrop from "./pages/AddCrops";
import ContactFarmer from "./pages/ContactFarmer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster richColors closeButton />
      <BrowserRouter>
        <SessionProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/commodity-trade" element={<CommodityTrade />} />
            <Route path="/services/krishi-sahayak-ai" element={<KrishiSahayakAI />} />
            <Route path="/services/nuvetra" element={<Nuvetra />} />
            <Route path="/services/fintrin" element={<Fintrin />} />
            <Route path="/services/test-certification" element={<TestCertification />} />
            <Route path="/services/storage-cold-storage" element={<StorageColdStorage />} />
            <Route path="/services/transport-calculator" element={<TransportCalculator />} />
            <Route path="/services/seeds-fertilizer-store" element={<SeedsFertilizerStore />} />
            <Route path="/services/tools-machinery" element={<ToolsMachinery />} />
            <Route path="/services/mandi-bhav" element={<MandiBhav />} />
            <Route path="/services/agri-news-schemes" element={<AgriNewsSchemes />} />
            <Route path="/services/kcc-agriculture-loans" element={<KCCAgricultureLoans />} />
            <Route path="/services/agricare-support" element={<AgriCareSupport />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
            <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
            <Route path="/add/crops" element={<AddCrop />} />
            <Route path="/contact-farmer/:id" element={<ContactFarmer />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SessionProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;