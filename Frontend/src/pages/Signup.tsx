import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Leaf, Loader2, User, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/UserSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
    gender: "male",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (formData.password != formData.confirmPassword) {
      toast.error("Your password and confirm password do not match.")
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/auth/register`, formData);
      const { user, accessToken, refreshToken } = res.data.data;
      dispatch(setUser({ user, accessToken }));
      localStorage.setItem('refreshToken', refreshToken);
      console.log('Signup successful!');
      if (user.role === "farmer") {
        navigate("/farmer-dashboard");
      } else if (user.role === "buyer") {
        navigate("/buyer-dashboard");
      }
    }
    catch (err) {
      toast.error('Signup failed:', err.response?.data || err.message);
    }
    finally {
      setLoading(false);
    }
    //console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center  ">
            <img
              src="https://res.cloudinary.com/djwzwq4cu/image/upload/v1757354785/file_00000000e984623094ee3596d39b764f_atvown.png"
              alt="Agrevon Logo"
              className="h-32 w-32 cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Join the agricultural marketplace</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="1234567890"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow only numbers
                  if (/^\d*$/.test(value)) {
                    setFormData({ ...formData, phone: value });
                  }
                }}
                required
                minLength={10}
                maxLength={10}
                pattern="\d{10}"
                className="border rounded-lg p-3 hover:border-primary focus:border-primary"
              />

            </div>

            {/* Role Selection */}
            <div className="space-y-3">
              <Label>I am a:</Label>
              <RadioGroup
                value={formData.role}
                onValueChange={(value) => setFormData({ ...formData, role: value })}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent transition-colors cursor-pointer">
                  <RadioGroupItem value="farmer" id="farmer" />
                  <Label htmlFor="farmer" className="flex items-center cursor-pointer">
                    <UserCheck className="h-4 w-4 mr-2 text-primary" />
                    Farmer
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent transition-colors cursor-pointer">
                  <RadioGroupItem value="buyer" id="buyer" />
                  <Label htmlFor="buyer" className="flex items-center cursor-pointer">
                    <User className="h-4 w-4 mr-2 text-primary" />
                    Buyer
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Gender Selection */}
            <div className="space-y-3">
              <Label>Gender:</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                className="grid grid-cols-3 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent transition-colors cursor-pointer">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="flex items-center cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent transition-colors cursor-pointer">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="flex items-center cursor-pointer">Female</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent transition-colors cursor-pointer">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="flex items-center cursor-pointer">Other</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Password Fields */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4 text-muted-foreground" /> : <Eye className="h-4 w-4 text-muted-foreground" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full btn-hero" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
