"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/ui/navigation";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function AddCrop() {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const token = useSelector((state: RootState) => state.user.accessToken);
    const [images, setImages] = useState<File[]>([]);

    const [formData, setFormData] = useState({
        cropName: "",
        category: "",
        description: "",
        quantity: { amount: "", unit: "" },
        priceType: "fixed",
        price: { basePrice: "", reservePrice: "" },
        location: { state: "", district: "", address: "" },
        harvestDate: "",
        expiryDate: "",
        qualityGrade: "B",
        specifications: { organic: false, pesticidesUsed: false, fertilizersUsed: false, certifications: [] }
    });

    useEffect(() => {
        if (!isAuthenticated) navigate("/login");
    }, [isAuthenticated]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [section, field] = name.split(".");
            setFormData(prev => ({
                ...prev,
                [section]: { ...prev[section], [field]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = [
            { field: "cropName", value: formData.cropName },
            { field: "category", value: formData.category },
            { field: "description", value: formData.description },
            { field: "quantity.amount", value: formData.quantity.amount },
            { field: "quantity.unit", value: formData.quantity.unit },
            { field: "price.basePrice", value: formData.price.basePrice },
            { field: "location.state", value: formData.location.state },
            { field: "location.district", value: formData.location.district },
            { field: "location.address", value: formData.location.address }
        ];

        const errors = requiredFields.filter(f => !f.value).map(f => f.field);
        if (errors.length > 0) {
            alert(`Please fill all required fields: ${errors.join(", ")}`);
            return;
        }

        try {
            const data = new FormData();
            Object.keys(formData).forEach(key => {
                if (typeof formData[key] === "object" && !Array.isArray(formData[key])) {
                    Object.keys(formData[key]).forEach(nestedKey => {
                        data.append(`${key}.${nestedKey}`, formData[key][nestedKey]);
                    });
                } else {
                    data.append(key, formData[key]);
                }
            });
            images.forEach(image => data.append("images", image));

            await axios.post(`${API_BASE_URL}/crops`, data, {
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
            });

            alert("Crop added successfully!");
            navigate("/farmer-dashboard");
        } catch (error: any) {
            console.error(error);
            alert("Error adding crop: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 flex flex-col items-center px-4 py-8">
                <Button
                    variant="outline"
                    onClick={() => navigate("/farmer-dashboard")}
                    className="flex items-center gap-2 mb-6 self-start"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Dashboard
                </Button>

                <Card className="w-full max-w-3xl shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Add New Crop</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <Label>Crop Name</Label>
                                <Input name="cropName" value={formData.cropName} onChange={handleChange} required />
                            </div>

                            <div>
                                <Label>Category</Label>
                                <Select name="category" onValueChange={(val) => setFormData({ ...formData, category: val })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="vegetables">Vegetables</SelectItem>
                                        <SelectItem value="fruits">Fruits</SelectItem>
                                        <SelectItem value="grains">Grains</SelectItem>
                                        <SelectItem value="spices">Spices</SelectItem>
                                        <SelectItem value="dairy">Dairy</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label>Description</Label>
                                <Textarea name="description" value={formData.description} onChange={handleChange} required />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Quantity</Label>
                                    <Input type="number" name="quantity.amount" value={formData.quantity.amount} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label>Unit</Label>
                                    <Select name="quantity.unit" onValueChange={(val) => setFormData({ ...formData, quantity: { ...formData.quantity, unit: val } })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="kg">Kg</SelectItem>
                                            <SelectItem value="quintal">Quintal</SelectItem>
                                            <SelectItem value="ton">Ton</SelectItem>
                                            <SelectItem value="pieces">Pieces</SelectItem>
                                            <SelectItem value="liters">Liters</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Base Price</Label>
                                    <Input type="number" name="price.basePrice" value={formData.price.basePrice} onChange={handleChange} required />
                                </div>
                                {formData.priceType === "auction" && (
                                    <div>
                                        <Label>Reserve Price</Label>
                                        <Input type="number" name="price.reservePrice" value={formData.price.reservePrice} onChange={handleChange} />
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <Label>State</Label>
                                    <Input name="location.state" value={formData.location.state} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label>District</Label>
                                    <Input name="location.district" value={formData.location.district} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label>Address</Label>
                                    <Input name="location.address" value={formData.location.address} onChange={handleChange} required />
                                </div>
                            </div>

                            <div>
                                <Label>Upload Images</Label>
                                <Input type="file" multiple accept="image/*" onChange={(e) => setImages(Array.from(e.target.files ?? []))} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label>Harvest Date</Label>
                                    <Input type="date" name="harvestDate" value={formData.harvestDate} onChange={handleChange} />
                                </div>
                                <div>
                                    <Label>Expiry Date</Label>
                                    <Input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
                                </div>
                            </div>

                            <div>
                                <Label>Quality Grade</Label>
                                <Select name="qualityGrade" onValueChange={(val) => setFormData({ ...formData, qualityGrade: val })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select grade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="A">A</SelectItem>
                                        <SelectItem value="B">B</SelectItem>
                                        <SelectItem value="C">C</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                                Add Crop
                            </Button>

                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
