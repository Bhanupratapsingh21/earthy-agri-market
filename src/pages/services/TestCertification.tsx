import ServicePageTemplate from "@/components/ServicePageTemplate";
import { FileCheck } from "lucide-react";

export default function TestCertification() {
  return (
    <ServicePageTemplate
      icon={FileCheck}
      title="Test & Certification"
      tagline="Book quality testing for your agricultural produce"
      description="Ensure your crops meet the highest quality standards with our comprehensive testing and certification services. From soil testing to final product certification, we provide accredited testing that enhances your crop value and market access."
      features={[
        "Accredited laboratory testing",
        "Soil health and nutrient analysis",
        "Pesticide residue testing",
        "Organic certification support",
        "Quality grade certification",
        "Export compliance testing"
      ]}
      howToUse={[
        "Select the type of testing required for your crops",
        "Schedule sample collection or visit our labs",
        "Submit samples with proper documentation",
        "Receive detailed test reports within 3-5 days",
        "Get quality certificates for verified products",
        "Use certificates to enhance market value"
      ]}
      faqs={[
        {
          question: "What types of tests do you offer?",
          answer: "We offer soil testing, pesticide residue analysis, nutritional content testing, organic certification, and quality grading for various crops."
        },
        {
          question: "How long does testing take?",
          answer: "Most standard tests are completed within 3-5 business days. Specialized tests may take up to 7-10 days depending on complexity."
        },
        {
          question: "Are your certifications recognized for export?",
          answer: "Yes, our certifications are internationally recognized and comply with export standards for major markets including USA, Europe, and Asia."
        }
      ]}
      relatedServices={[
        { title: "NUVETRA", slug: "nuvetra" },
        { title: "Commodity Trade", slug: "commodity-trade" },
        { title: "Storage & Cold Storage", slug: "storage-cold-storage" }
      ]}
    />
  );
}