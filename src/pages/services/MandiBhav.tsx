import ServicePageTemplate from "@/components/ServicePageTemplate";
import { TrendingUp } from "lucide-react";

export default function MandiBhav() {
  return (
    <ServicePageTemplate
      icon={TrendingUp}
      title="Mandi Bhav"
      tagline="Live market rates and price analytics"
      description="Stay updated with real-time market prices from major mandis across the country. Get price trends, market analysis, and intelligent recommendations to optimize your selling decisions and maximize profits."
      features={[
        "Real-time mandi price updates",
        "Historical price trend analysis",
        "Price prediction algorithms",
        "Market demand forecasting",
        "Best selling time recommendations",
        "Comparative market analysis"
      ]}
      howToUse={[
        "Select your crop and preferred markets",
        "View current prices and trends",
        "Set price alerts for target rates",
        "Analyze historical data for patterns",
        "Get selling recommendations from AI",
        "Plan your market strategy accordingly"
      ]}
      faqs={[
        {
          question: "How frequently are prices updated?",
          answer: "Prices are updated in real-time throughout market hours, with data sourced directly from major mandis and agricultural markets across India."
        },
        {
          question: "Can I set alerts for specific price levels?",
          answer: "Yes, you can set custom price alerts for any crop. You'll receive notifications via SMS, email, or app when prices reach your target levels."
        },
        {
          question: "Do you provide price predictions?",
          answer: "Our AI analyzes historical data, weather patterns, and market trends to provide short-term price predictions with guidance on optimal selling times."
        }
      ]}
      relatedServices={[
        { title: "Commodity Trade", slug: "commodity-trade" },
        { title: "Fintrin", slug: "fintrin" },
        { title: "Krishi Sahayak AI", slug: "krishi-sahayak-ai" }
      ]}
    />
  );
}