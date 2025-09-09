import { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



export function BidSection({ cropId }: { cropId: string }) {
    const [bidAmount, setBidAmount] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const token = useSelector((state: RootState) => state.user.accessToken);
    const navigate = useNavigate();


    useEffect(() => {
        if (!isAuthenticated) {
            toast.error("user is not authenticated!Please login again")

            navigate('/login');
        }
    }, [isAuthenticated]);

    const placeBid = async () => {
        try {
            setLoading(true);
            // const token = localStorage.getItem("refreshtoken");
            const res = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/bids/place`,
                { cropId, bidAmount: Number(bidAmount), message },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            toast.success("✅ Bid placed successfully!");

            console.log(res.data);
        } catch (error: any) {

            toast.error("❌ Error placing bid! ")

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-6 pt-4 border-t border-amber-200">
            <div className="text-center mb-4">
                <p className="text-amber-700 text-sm">Interested in this crop?</p>
                <h4 className="font-semibold text-amber-900">Place your bid now!</h4>
            </div>
            <div className="space-y-3">
                <Input
                    type="number"
                    placeholder="Enter bid amount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Optional message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                    onClick={placeBid}
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                >
                    {loading ? "Placing..." : "Place Bid"}
                </Button>
            </div>
        </div>
    );
}
