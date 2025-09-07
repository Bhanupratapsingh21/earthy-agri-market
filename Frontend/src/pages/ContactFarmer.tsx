import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import {
    Mail,
    Phone,
    MapPin,
    Star,
    Calendar,
    Package,
    DollarSign,
    Sprout,
    User,
    ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BidSection } from "./PlaceBid";

export default function ContactFarmer() {
    const { id } = useParams();
    const [crop, setCrop] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCrop = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/crops/${id}`);
                console.log(res.data);
                if (res.data.success) {
                    setCrop(res.data.data.crop);
                }
            } catch (error) {
                console.error("Error fetching crop:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCrop();
    }, [id]);

    const nextImage = () => {
        if (crop.images?.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === crop.images.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevImage = () => {
        if (crop.images?.length > 0) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? crop.images.length - 1 : prevIndex - 1
            );
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-pulse">
                    <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
                </div>
                <p className="text-green-800 font-medium">Loading farmer details...</p>
            </div>
        </div>
    );

    if (!crop) return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 flex items-center justify-center">
            <div className="text-center">
                <Sprout className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <p className="text-green-800 font-medium">Crop not found.</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <Button variant="outline" className="mb-6 border-green-300 text-green-700 hover:bg-green-50"
                        onClick={() => navigate('/marketplace')}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to listings
                    </Button>

                    <Card className="overflow-hidden shadow-xl border-0 bg-white rounded-2xl">
                        {/* Header with gradient */}
                        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6">
                            <h1 className="text-3xl font-bold mb-2">{crop.name}</h1>
                            <p className="opacity-90">Fresh from the farm to your table</p>
                        </div>

                        <div className="p-6">
                            {/* Crop Images with carousel */}
                            {crop.images?.length > 0 && (
                                <div className="relative mb-6 rounded-lg overflow-hidden">
                                    <img
                                        src={crop.images[currentImageIndex].url}
                                        alt={crop.images[currentImageIndex].alt || crop.name}
                                        className="w-full h-80 object-cover rounded-lg"
                                    />

                                    {crop.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                                                {crop.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                        className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Farmer Info */}
                                <Card className="border-green-100 bg-green-50 overflow-hidden">
                                    <div className="bg-green-200 p-3">
                                        <h3 className="text-lg font-semibold text-green-800 flex items-center">
                                            <User className="mr-2 h-5 w-5" /> Farmer Details
                                        </h3>
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                                    <User className="h-5 w-5 text-green-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-green-600">Name</p>
                                                    <p className="font-medium">{crop.farmerId?.firstName} {crop.farmerId?.lastName}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                                    <Mail className="h-5 w-5 text-green-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-green-600">Email</p>
                                                    <p className="font-medium">{crop.farmerId?.email}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                                    <Phone className="h-5 w-5 text-green-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-green-600">Phone</p>
                                                    <p className="font-medium">{crop.farmerId?.phone}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                                    <MapPin className="h-5 w-5 text-green-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-green-600">Location</p>
                                                    <p className="font-medium">{crop.farmer?.location || "Not specified"}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                                    <Star className="h-5 w-5 text-green-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-green-600">Rating</p>
                                                    <div className="flex items-center">
                                                        {crop.farmer?.rating ? (
                                                            <>
                                                                <span className="font-medium mr-1">{crop.farmer.rating}</span>
                                                                <div className="flex">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star
                                                                            key={i}
                                                                            className={`h-4 w-4 ${i < Math.floor(crop.farmer.rating)
                                                                                ? "text-amber-400 fill-amber-400"
                                                                                : "text-gray-300"
                                                                                }`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <span className="font-medium">N/A</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-green-200">
                                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                                <Mail className="mr-2 h-4 w-4" /> Contact Farmer
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Crop Info */}
                                <Card className="border-amber-100 bg-amber-50 overflow-hidden">
                                    <div className="bg-amber-200 p-3">
                                        <h3 className="text-lg font-semibold text-amber-800 flex items-center">
                                            <Sprout className="mr-2 h-5 w-5" /> Crop Details
                                        </h3>
                                    </div>
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <div className="bg-amber-100 p-2 rounded-full mr-3">
                                                    <Sprout className="h-5 w-5 text-amber-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-amber-600">Category</p>
                                                    <p className="font-medium capitalize">{crop.category}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="bg-amber-100 p-2 rounded-full mr-3">
                                                    <DollarSign className="h-5 w-5 text-amber-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-amber-600">Price</p>
                                                    <p className="font-medium">₹{crop.price?.basePrice}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="bg-amber-100 p-2 rounded-full mr-3">
                                                    <Package className="h-5 w-5 text-amber-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-amber-600">Quantity</p>
                                                    <p className="font-medium">{crop.quantity?.amount} {crop.quantity?.unit}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div className="bg-amber-100 p-2 rounded-full mr-3">
                                                    <Calendar className="h-5 w-5 text-amber-700" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-amber-600">Harvest Date</p>
                                                    <p className="font-medium">{new Date(crop.harvestDate).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Future Bidding Section */}
                                        <div className="mt-6 pt-4 border-t border-amber-200">
                                            <div className="text-center mb-4">
                                                <p className="text-amber-700 text-sm">Interested in this crop?</p>
                                                <h4 className="font-semibold text-amber-900">Place your bid now!</h4>
                                            </div>
                                            <BidSection cropId={id} />

                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}