import ServicePageTemplate from "@/components/ServicePageTemplate";
import { QrCode } from "lucide-react";

export default function Nuvetra() {
  return (
    <ServicePageTemplate
      icon={QrCode}
      title="NUVETRA"
      tagline="Blockchain Crop Identity (QR) for traceability"
      description="Ensure complete crop traceability from farm to fork with our blockchain-powered QR code system. Track the entire journey of agricultural products, verify authenticity, and build consumer trust through transparent supply chain management."
      features={[
        "Blockchain-powered crop tracking",
        "QR code generation for each batch",
        "Complete supply chain visibility",
        "Fraud prevention and authenticity verification",
        "Consumer trust and transparency",
        "Compliance with food safety standards"
      ]}
      howToUse={[
        "Register your farm and crops on the NUVETRA platform",
        "Generate unique QR codes for your crop batches",
        "Update the blockchain record at each stage of production",
        "Share QR codes with buyers and consumers",
        "Track your products throughout the supply chain",
        "Verify authenticity and quality at any point"
      ]}
      faqs={[
        {
          question: "How does blockchain ensure crop authenticity?",
          answer: "Blockchain creates an immutable record of each crop's journey, making it impossible to forge or tamper with the tracking data, ensuring complete authenticity."
        },
        {
          question: "Can consumers scan QR codes to verify products?",
          answer: "Yes, consumers can scan the QR codes to view the complete history of the product, including farm details, cultivation practices, and quality certifications."
        },
        {
          question: "Is there a cost for generating QR codes?",
          answer: "Basic QR code generation is free for verified farmers. Premium features like advanced analytics and custom branding are available with paid plans."
        }
      ]}
      relatedServices={[
        { title: "Test & Certification", slug: "test-certification" },
        { title: "Commodity Trade", slug: "commodity-trade" },
        { title: "Storage & Cold Storage", slug: "storage-cold-storage" }
      ]}
    />
  );
}