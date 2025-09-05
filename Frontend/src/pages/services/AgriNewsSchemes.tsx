import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Newspaper } from "lucide-react";

export default function AgriNewsSchemes() {
  return (
    <ServicePageTemplate
      icon={Newspaper}
      title="Agri News & Schemes"
      tagline="Latest updates on agriculture and government schemes"
      description="Stay informed with the latest agricultural news, government schemes, policy updates, and industry trends. Get personalized updates relevant to your crops and location to make informed farming decisions."
      features={[
        "Real-time agricultural news updates",
        "Government scheme notifications",
        "Policy change alerts",
        "Weather and climate updates",
        "Market trend reports",
        "Personalized content curation"
      ]}
      howToUse={[
        "Set your preferences for crops and regions",
        "Receive personalized news and scheme updates",
        "Browse categorized news sections",
        "Save important articles for future reference",
        "Get application guidance for relevant schemes",
        "Share news with your farming community"
      ]}
      faqs={[
        {
          question: "How do I apply for government schemes mentioned in the news?",
          answer: "We provide direct links to application portals and step-by-step guidance for applying to relevant government schemes and subsidies."
        },
        {
          question: "Can I get news in my local language?",
          answer: "Yes, we provide news content in multiple regional languages including Hindi, Marathi, Gujarati, Punjabi, Tamil, and Telugu."
        },
        {
          question: "How often is the content updated?",
          answer: "Our news feed is updated multiple times daily with the latest developments from government sources, agricultural institutes, and industry publications."
        }
      ]}
      relatedServices={[
        { title: "Krishi Sahayak AI", slug: "krishi-sahayak-ai" },
        { title: "KCC & Agriculture Loans", slug: "kcc-agriculture-loans" },
        { title: "AgriCare Support", slug: "agricare-support" }
      ]}
    />
  );
}