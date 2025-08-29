import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Bot } from "lucide-react";

export default function KrishiSahayakAI() {
  return (
    <ServicePageTemplate
      icon={Bot}
      title="Krishi Sahayak AI"
      tagline="Chat-based farming advisor for expert guidance"
      description="Get instant, personalized farming advice from our AI-powered agricultural expert. From crop selection to pest management, weather planning to harvest timing, our AI advisor provides 24/7 support to help optimize your farming operations."
      features={[
        "24/7 AI-powered farming consultation",
        "Crop-specific guidance and recommendations",
        "Weather-based farming advice",
        "Pest and disease identification",
        "Soil health analysis and suggestions",
        "Seasonal planning assistance"
      ]}
      howToUse={[
        "Access the AI chat interface from your dashboard",
        "Ask any farming-related question in your preferred language",
        "Upload photos of crops, pests, or soil conditions for analysis",
        "Receive instant, personalized recommendations",
        "Save important advice for future reference",
        "Schedule reminders for recommended farming activities"
      ]}
      faqs={[
        {
          question: "How accurate is the AI farming advice?",
          answer: "Our AI is trained on extensive agricultural data and continuously updated with the latest farming practices. However, we recommend consulting with local agricultural experts for complex issues."
        },
        {
          question: "Can the AI identify plant diseases from photos?",
          answer: "Yes, our AI can identify common plant diseases, pest infestations, and nutrient deficiencies from high-quality photos of affected plants."
        },
        {
          question: "Is the service available in regional languages?",
          answer: "Currently, we support Hindi, English, and several regional languages including Marathi, Gujarati, and Punjabi, with more languages being added regularly."
        }
      ]}
      relatedServices={[
        { title: "Agri News & Schemes", slug: "agri-news-schemes" },
        { title: "Test & Certification", slug: "test-certification" },
        { title: "AgriCare Support", slug: "agricare-support" }
      ]}
    />
  );
}