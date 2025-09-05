import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Truck } from "lucide-react";

export default function TransportCalculator() {
  return (
    <ServicePageTemplate
      icon={Truck}
      title="Transport Calculator"
      tagline="Calculate transport costs for efficient logistics"
      description="Optimize your logistics costs with our intelligent transport calculator. Get accurate cost estimates, find reliable transporters, and plan efficient routes for moving your agricultural produce from farm to market."
      features={[
        "Accurate cost calculation algorithms",
        "Multiple transporter options",
        "Route optimization suggestions",
        "Real-time fuel price updates",
        "Load capacity optimization",
        "Delivery tracking and updates"
      ]}
      howToUse={[
        "Enter pickup and delivery locations",
        "Specify crop type and quantity",
        "Select preferred transport vehicle type",
        "Compare quotes from multiple transporters",
        "Book the best option for your needs",
        "Track shipment in real-time"
      ]}
      faqs={[
        {
          question: "How accurate are the cost estimates?",
          answer: "Our calculator uses real-time data including fuel prices, toll charges, and market rates to provide estimates with 95% accuracy."
        },
        {
          question: "Can I book transport directly through the platform?",
          answer: "Yes, you can compare quotes and book transport services directly. We work with verified transporters who meet our quality standards."
        },
        {
          question: "What if my shipment gets delayed or damaged?",
          answer: "All our partner transporters provide insurance coverage. We also offer real-time tracking and customer support for any issues."
        }
      ]}
      relatedServices={[
        { title: "Storage & Cold Storage", slug: "storage-cold-storage" },
        { title: "Commodity Trade", slug: "commodity-trade" },
        { title: "Fintrin", slug: "fintrin" }
      ]}
    />
  );
}