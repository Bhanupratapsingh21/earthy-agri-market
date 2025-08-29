import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Warehouse } from "lucide-react";

export default function StorageColdStorage() {
  return (
    <ServicePageTemplate
      icon={Warehouse}
      title="Storage & Cold Storage"
      tagline="Find storage facilities for your crops"
      description="Access a network of modern storage and cold storage facilities to preserve your crops and reduce post-harvest losses. Our platform connects you with verified storage providers offering competitive rates and quality preservation services."
      features={[
        "Network of verified storage facilities",
        "Climate-controlled storage options",
        "Real-time inventory tracking",
        "Competitive pricing comparison",
        "Insurance coverage options",
        "Automated quality monitoring"
      ]}
      howToUse={[
        "Search for storage facilities near your location",
        "Compare prices and facility features",
        "Book storage space online",
        "Transport crops to the facility",
        "Monitor storage conditions through our app",
        "Retrieve crops when ready for sale"
      ]}
      faqs={[
        {
          question: "What types of storage are available?",
          answer: "We offer various storage types including cold storage for fruits and vegetables, grain silos for cereals, and controlled atmosphere storage for extended preservation."
        },
        {
          question: "How is pricing calculated?",
          answer: "Pricing is based on storage type, duration, quantity, and location. Most facilities offer bulk discounts and seasonal pricing options."
        },
        {
          question: "Is my produce insured during storage?",
          answer: "Yes, we offer comprehensive insurance coverage options to protect your crops against damage, spoilage, and other risks during storage."
        }
      ]}
      relatedServices={[
        { title: "Transport Calculator", slug: "transport-calculator" },
        { title: "Test & Certification", slug: "test-certification" },
        { title: "Commodity Trade", slug: "commodity-trade" }
      ]}
    />
  );
}