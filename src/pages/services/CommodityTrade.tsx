import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ShoppingCart } from "lucide-react";

export default function CommodityTrade() {
  return (
    <ServicePageTemplate
      icon={ShoppingCart}
      title="Commodity Trade"
      tagline="Buy and sell crops directly with farmers and buyers"
      description="Our commodity trading platform connects farmers directly with buyers, eliminating middlemen and ensuring fair prices for both parties. Trade agricultural products with transparency, secure payments, and verified quality standards."
      features={[
        "Direct farmer-to-buyer connections",
        "Real-time price matching",
        "Secure payment processing",
        "Quality verification system",
        "Bulk trading capabilities",
        "Market price analytics"
      ]}
      howToUse={[
        "Register as a farmer or buyer on our platform",
        "List your crops with details like quantity, quality, and price",
        "Browse available crops or receive matched offers",
        "Negotiate terms and finalize the deal",
        "Complete secure payment through our platform",
        "Arrange pickup or delivery through our logistics partners"
      ]}
      faqs={[
        {
          question: "How do I ensure the quality of crops before purchase?",
          answer: "We provide a comprehensive quality verification system with third-party testing and farmer certification. You can also request sample testing before bulk purchases."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We support multiple payment methods including bank transfers, digital wallets, and cryptocurrency payments for verified users."
        },
        {
          question: "Is there a minimum order quantity?",
          answer: "Minimum order quantities vary by crop type and farmer. Most farmers accept orders starting from 100kg, while some bulk traders require larger quantities."
        }
      ]}
      relatedServices={[
        { title: "Storage & Cold Storage", slug: "storage-cold-storage" },
        { title: "Transport Calculator", slug: "transport-calculator" },
        { title: "Test & Certification", slug: "test-certification" }
      ]}
    />
  );
}