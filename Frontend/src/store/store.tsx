// SessionProvider.tsx
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser, logout } from "./UserSlice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const refreshSession = async (token: string) => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/auth/refresh`,
                { refreshToken: token },
            );


            localStorage.setItem("refreshToken", response.data.refreshToken);
            dispatch(setUser({
                user: response.data.user,
                accessToken: response.data.accessToken
            }));
        } catch (err) {
            console.error("Refresh token failed:", err);
            dispatch(logout());
            localStorage.removeItem("refreshToken");
            navigate("/login");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("refreshToken");
        if (token) {
            refreshSession(token);
        } else {
            console.log("Guest Login");
            dispatch(logout());
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-black text-white">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
                    <h2 className="mt-4">Loading...</h2>
                    <p className="text-gray-400">Checking your session...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};