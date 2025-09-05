// models/Crop.js
import mongoose from 'mongoose';

const cropSchema = new mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cropName: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['vegetables', 'fruits', 'grains', 'spices', 'dairy', 'other']
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        unit: {
            type: String,
            required: true,
            enum: ['kg', 'quintal', 'ton', 'pieces', 'liters']
        }
    },
    priceType: {
        type: String,
        enum: ['fixed', 'auction'],
        required: true
    },
    price: {
        basePrice: {
            type: Number,
            required: true,
            min: 0
        },
        currentPrice: { type: Number },
        reservePrice: { type: Number }
    },
    location: {
        state: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        coordinates: {
            latitude: Number,
            longitude: Number
        }
    },
    images: [{
        url: { type: String, required: true },
        publicId: { type: String, required: true },
        alt: { type: String, default: 'Crop image' }
    }],
    harvestDate: Date,
    expiryDate: Date,
    qualityGrade: {
        type: String,
        enum: ['A', 'B', 'C'],
        default: 'B'
    },
    status: {
        type: String,
        enum: ['active', 'sold', 'expired', 'draft'],
        default: 'active'
    },
    auctionEndDate: Date,
    specifications: {
        organic: { type: Boolean, default: false },
        pesticidesUsed: Boolean,
        fertilizersUsed: Boolean,
        certifications: [String]
    }
}, {
    timestamps: true
});

const Crop = mongoose.model('Crop', cropSchema);
export default Crop;
