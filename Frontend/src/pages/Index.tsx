import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { TargetSections } from "@/components/ui/target-sections";
import { Footer } from "@/components/ui/footer";
import LandingPage from "./Landingpage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LandingPage /> 
      <FeaturesSection />
      <TargetSections />
      <Footer />
    </div>
  );
};

export default Index;
