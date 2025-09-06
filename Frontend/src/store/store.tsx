import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser, logout } from "./UserSlice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const Session = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const refreshTokenNewSession = async (token) => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/auth/refresh`,
                { refreshToken: token }, // ✅ correct request body
                { withCredentials: true }
            );

            const { user, accessToken, refreshToken } = response.data.data;

            // ✅ save new refresh token
            localStorage.setItem("refreshToken", refreshToken);

            // ✅ update redux with user + access token
            dispatch(setUser({ user, accessToken }));
        } catch (err) {
            console.error("Refresh token failed:", err);
            dispatch(logout());
            localStorage.removeItem("refreshToken");
            navigate("/login"); // optional redirect
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("refreshToken");
        if (token) {
            refreshTokenNewSession(token);
        } else {
            console.log("Guest Login");
            dispatch(logout());
            setLoading(false);
        }
    }, [dispatch]);

    if (loading) {
        return (
            <div className="  bg-gradient-hero flex w-full h-screen justify-center items-center bg-black text-white" >
                <div className="text-center" >
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto" > </div>
                    < h2 className="mt-4" > Loading...</h2>
                    < p className="text-gray-400" >
                        Checking your session... <br />
                    </p>
                </div>
            </div>
        );
    }

    return null;
};
