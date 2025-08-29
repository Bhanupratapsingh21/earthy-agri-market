import ServicePageTemplate from "@/components/ServicePageTemplate";
import { CreditCard } from "lucide-react";

export default function KCCAgricultureLoans() {
  return (
    <ServicePageTemplate
      icon={CreditCard}
      title="KCC & Agriculture Loans"
      tagline="Financial assistance and loan services"
      description="Access comprehensive information and assistance for Kisan Credit Card (KCC) and various agricultural loan schemes. Get expert guidance on loan applications, eligibility criteria, and financial planning for your farming needs."
      features={[
        "KCC application assistance",
        "Agricultural loan guidance",
        "Eligibility assessment tools",
        "Document preparation support",
        "Interest rate comparisons",
        "Loan repayment planning"
      ]}
      howToUse={[
        "Check your eligibility for different loan schemes",
        "Prepare required documents with our checklist",
        "Compare loan options from multiple banks",
        "Get assistance with application process",
        "Track your application status",
        "Receive loan management guidance"
      ]}
      faqs={[
        {
          question: "What is the current interest rate for KCC?",
          answer: "KCC interest rates vary by bank and loan amount. Currently, rates range from 4-7% per annum for prompt repayment, with additional subsidies available."
        },
        {
          question: "What documents are required for KCC application?",
          answer: "Basic documents include land records, identity proof, address proof, and bank statements. We provide a complete checklist based on your specific situation."
        },
        {
          question: "How long does the loan approval process take?",
          answer: "Typically, KCC applications are processed within 15-30 days. We help expedite the process by ensuring all documentation is complete and accurate."
        }
      ]}
      relatedServices={[
        { title: "Fintrin", slug: "fintrin" },
        { title: "Agri News & Schemes", slug: "agri-news-schemes" },
        { title: "AgriCare Support", slug: "agricare-support" }
      ]}
    />
  );
}