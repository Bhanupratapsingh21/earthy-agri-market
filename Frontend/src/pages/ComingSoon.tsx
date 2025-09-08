import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { ArrowLeft, Sprout, Clock, Calendar, Mail } from "lucide-react";

export default function ComingSoon() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Target launch date: 30 days from now
    const calculateTimeLeft = () => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 30);

        const difference = +targetDate - +new Date();
        if (difference > 0) {
            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            });
        }
    };

    useEffect(() => {
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50/80 to-amber-50/80 backdrop-blur-sm">
            <Navigation />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button */}
                <Button
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 bg-white/80 backdrop-blur-sm border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-300 transition-all"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Dashboard
                </Button>

                {/* Main Content */}
                <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-white/90 backdrop-blur-sm border border-white/20">
                    <CardContent className="p-8 md:p-12 text-center">
                        {/* Icon */}
                        <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Sprout className="h-12 w-12 text-white" />
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent mb-4">
                            Coming Soon
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-green-700/90 mb-8 max-w-2xl mx-auto">
                            We're cultivating something amazing! Our new feature is growing and will be ready for harvest soon.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}