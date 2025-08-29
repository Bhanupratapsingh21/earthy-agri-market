import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Sprout } from "lucide-react";

export default function SeedsFertilizerStore() {
  return (
    <ServicePageTemplate
      icon={Sprout}
      title="Seeds & Fertilizer Store"
      tagline="Agricultural supplies for optimal crop growth"
      description="Access high-quality seeds, fertilizers, and agricultural inputs from trusted suppliers. Our online marketplace offers certified seeds, organic fertilizers, and essential farming supplies with expert recommendations for maximum yield."
      features={[
        "Certified seed varieties",
        "Organic and conventional fertilizers",
        "Expert product recommendations",
        "Bulk purchase discounts",
        "Quality assurance guarantees",
        "Seasonal supply planning"
      ]}
      howToUse={[
        "Browse our catalog of seeds and fertilizers",
        "Use filters to find products for your crop type",
        "Read expert recommendations and reviews",
        "Add products to cart and place order",
        "Schedule delivery to your farm",
        "Track order status and receive products"
      ]}
      faqs={[
        {
          question: "Are all seeds certified and tested?",
          answer: "Yes, we only sell certified seeds that have been tested for germination rate, purity, and disease resistance from authorized dealers."
        },
        {
          question: "Do you offer organic fertilizer options?",
          answer: "Absolutely! We have a wide range of organic fertilizers, bio-fertilizers, and natural soil amendments suitable for organic farming."
        },
        {
          question: "Can I get recommendations based on my soil type?",
          answer: "Yes, our experts can provide personalized recommendations based on your soil test results and crop requirements."
        }
      ]}
      relatedServices={[
        { title: "Test & Certification", slug: "test-certification" },
        { title: "Krishi Sahayak AI", slug: "krishi-sahayak-ai" },
        { title: "Tools & Machinery", slug: "tools-machinery" }
      ]}
    />
  );
}