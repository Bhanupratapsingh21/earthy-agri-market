import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Wrench } from "lucide-react";

export default function ToolsMachinery() {
  return (
    <ServicePageTemplate
      icon={Wrench}
      title="Tools & Machinery"
      tagline="Access farming equipment and modern tools"
      description="Rent or purchase modern farming equipment and tools to increase efficiency and productivity. From tractors to harvesting equipment, access the latest agricultural technology without the high upfront investment."
      features={[
        "Wide range of farming equipment",
        "Rental and purchase options",
        "Latest agricultural technology",
        "Maintenance and support services",
        "Flexible payment plans",
        "Equipment usage training"
      ]}
      howToUse={[
        "Browse available equipment categories",
        "Select rental duration or purchase option",
        "Check availability in your area",
        "Book equipment with advance payment",
        "Receive equipment with operator training",
        "Return equipment after use or complete purchase"
      ]}
      faqs={[
        {
          question: "What types of equipment are available for rent?",
          answer: "We offer tractors, harvesters, tillers, planters, sprayers, and various specialized equipment for different crops and farming operations."
        },
        {
          question: "Do you provide operators with the equipment?",
          answer: "Yes, we can provide trained operators for complex machinery, or we offer training sessions for farmers who want to operate the equipment themselves."
        },
        {
          question: "What if the equipment breaks down during rental?",
          answer: "All rental equipment comes with maintenance support. We provide immediate replacement or on-site repair services at no additional cost."
        }
      ]}
      relatedServices={[
        { title: "Seeds & Fertilizer Store", slug: "seeds-fertilizer-store" },
        { title: "Krishi Sahayak AI", slug: "krishi-sahayak-ai" },
        { title: "AgriCare Support", slug: "agricare-support" }
      ]}
    />
  );
}