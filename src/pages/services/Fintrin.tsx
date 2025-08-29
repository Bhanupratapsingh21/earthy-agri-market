import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Calculator } from "lucide-react";

export default function Fintrin() {
  return (
    <ServicePageTemplate
      icon={Calculator}
      title="Fintrin"
      tagline="Finance AI & Tracker for agricultural finances"
      description="Manage your agricultural finances with our AI-powered financial tracker. Get intelligent insights into farm expenses, revenue optimization, investment planning, and automated financial reporting for better farm management decisions."
      features={[
        "AI-powered financial analysis",
        "Automated expense tracking",
        "Revenue optimization suggestions",
        "Investment planning and recommendations",
        "Tax calculation and reporting",
        "Crop profitability analysis"
      ]}
      howToUse={[
        "Connect your bank accounts and financial sources",
        "Categorize farm-related income and expenses",
        "Set financial goals and budgets for different crops",
        "Receive AI-generated insights and recommendations",
        "Generate automated financial reports",
        "Plan investments based on profitability analysis"
      ]}
      faqs={[
        {
          question: "How secure is my financial data?",
          answer: "We use bank-level encryption and security protocols. Your data is stored securely and never shared with third parties without your explicit consent."
        },
        {
          question: "Can the AI help with tax preparation?",
          answer: "Yes, Fintrin automatically categorizes farm expenses and generates tax-ready reports that comply with agricultural tax regulations."
        },
        {
          question: "Does it work with multiple crops and farms?",
          answer: "Absolutely! You can track finances for multiple crops, farms, and seasons separately, with consolidated reporting available."
        }
      ]}
      relatedServices={[
        { title: "KCC & Agriculture Loans", slug: "kcc-agriculture-loans" },
        { title: "Mandi Bhav", slug: "mandi-bhav" },
        { title: "Krishi Sahayak AI", slug: "krishi-sahayak-ai" }
      ]}
    />
  );
}