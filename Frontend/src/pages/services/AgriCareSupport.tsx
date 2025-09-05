import ServicePageTemplate from "@/components/ServicePageTemplate";
import { HeadphonesIcon } from "lucide-react";

export default function AgriCareSupport() {
  return (
    <ServicePageTemplate
      icon={HeadphonesIcon}
      title="AgriCare Support"
      tagline="Get help and support for all your needs"
      description="Our dedicated support team is available 24/7 to assist you with any agricultural queries, technical issues, or platform guidance. Get personalized help from agricultural experts and technical support specialists."
      features={[
        "24/7 customer support availability",
        "Multi-language support team",
        "Agricultural expert consultations",
        "Technical troubleshooting assistance",
        "Live chat and phone support",
        "Community forum access"
      ]}
      howToUse={[
        "Contact us via chat, phone, or email",
        "Describe your issue or question clearly",
        "Get connected with the right expert",
        "Receive step-by-step guidance",
        "Follow up if additional help is needed",
        "Rate your support experience"
      ]}
      faqs={[
        {
          question: "What types of support do you provide?",
          answer: "We provide technical support for platform issues, agricultural guidance from experts, assistance with transactions, and general help with all our services."
        },
        {
          question: "Is support available in regional languages?",
          answer: "Yes, our support team can assist you in Hindi, English, and major regional languages including Marathi, Gujarati, Punjabi, Tamil, and Telugu."
        },
        {
          question: "How quickly can I expect a response?",
          answer: "Our live chat provides instant responses during business hours. Email queries are typically answered within 2-4 hours, and phone support is available 24/7."
        }
      ]}
      relatedServices={[
        { title: "Krishi Sahayak AI", slug: "krishi-sahayak-ai" },
        { title: "Agri News & Schemes", slug: "agri-news-schemes" },
        { title: "Tools & Machinery", slug: "tools-machinery" }
      ]}
    />
  );
}