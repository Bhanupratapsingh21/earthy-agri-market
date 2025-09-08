import { useState } from "react";
import { Menu, X, Leaf, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store"; // adjust path based on your store setup
import { logout } from "@/store/UserSlice";
import { User as UserIcon } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.user);
  const userRole = useSelector((state: RootState) => state.user.user?.role);
  const refreshToken = localStorage.getItem('refreshToken');
  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}Auth/logout`, {
        refreshToken,
      });
      localStorage.removeItem('refreshToken');
      navigate('/login');
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Logout failed:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message,
        });
      } else {
        console.error('Unexpected error during logout:', error);
      }
    }
    dispatch(logout());
  };

  return (
    <nav className={cn("bg-white shadow-soft border-b border-border", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span
              className="text-2xl font-bold text-primary cursor-pointer"
              onClick={() => {
                if (user.role === "farmer") navigate("/farmer-dashboard");
                else if (user.role === "buyer") navigate("/buyer-dashboard");
              }}
            >
              Agrevon
            </span>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/marketplace" className="text-foreground hover:text-primary transition-colors">
              Marketplace
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/support" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="flex items-center gap-2 font-medium text-foreground">
                  <UserIcon className="w-5 h-5 text-foreground" />
                  {user?.firstName}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </a>
                <a href="/signup">
                  <Button size="sm" className="btn-hero">
                    <User className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </a>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <a href="/marketplace" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Marketplace
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                About
              </a>
              <a href="/services" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Services
              </a>
              <a href="/support" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Support
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Contact
              </a>

              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {isAuthenticated ? (
                  <>
                    <span className="px-2 font-medium text-foreground">
                      👋 {user?.firstName || "User"}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <a href="/login">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                    </a>
                    <a href="/signup">
                      <Button size="sm" className="w-full btn-hero">
                        <User className="h-4 w-4 mr-2" />
                        Sign Up
                      </Button>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
