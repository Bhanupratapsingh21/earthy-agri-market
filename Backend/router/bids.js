// routes/bids.js
// routes/crops.js (updated with Cloudinary middleware)
import express from 'express';
const router = express.Router();
import Crop from '../models/Crop.js';
import { authMiddleware } from '../middleware/auth.js';
import { uploadMultipleImagesToCloudinary, deleteFromCloudinary } from '../middleware/uploadToCloudinary.js';
import Bid from "../models/Bid.js";
import { authMiddleware as auth } from '../middleware/auth.js';
// Place a bid on a crop
router.post('/place', auth(), async (req, res) => {
    try {
        const { cropId, bidAmount, message } = req.body;
        const buyerId = req.user.id;

        // Check if crop exists and is available for bidding
        const crop = await Crop.findById(cropId);
        if (!crop) {
            return res.status(404).json({
                success: false,
                message: 'Crop not found'
            });
        }

        if (crop.farmerId.toString() === buyerId) {
            return res.status(400).json({
                success: false,
                message: 'Cannot bid on your own crop'
            });
        }

        if (crop.isAuction && crop.auctionEndTime < new Date()) {
            return res.status(400).json({
                success: false,
                message: 'Auction has ended'
            });
        }

        // Check minimum bid requirement
        if (crop.isAuction && bidAmount < crop.minimumBid) {
            return res.status(400).json({
                success: false,
                message: `Bid must be at least ${crop.minimumBid}`
            });
        }

        const newBid = new Bid({
            cropId,
            buyerId,
            farmerId: crop.farmerId,
            bidAmount,
            message,
            status: 'pending'
        });

        await newBid.save();

        // Update crop with highest bid if it's an auction
        if (crop.isAuction) {
            const highestBid = await Bid.findOne({ cropId })
                .sort({ bidAmount: -1 });

            if (highestBid && highestBid.bidAmount === bidAmount) {
                crop.currentHighestBid = bidAmount;
                await crop.save();
            }
        }

        res.status(201).json({
            success: true,
            message: 'Bid placed successfully',
            bid: newBid
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error placing bid',
            error: error.message
        });
    }
});

// Get bids for a specific crop (for farmers)
router.get('/crop/:cropId', auth(), async (req, res) => {
    try {
        const { cropId } = req.params;

        const crop = await Crop.findById(cropId);
        if (!crop) {
            return res.status(404).json({
                success: false,
                message: 'Crop not found'
            });
        }

        // Only farmer who owns the crop can see all bids
        if (crop.farmerId.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view bids'
            });
        }

        const bids = await Bid.find({ cropId })
            .populate('buyerId', 'name email phone')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            bids
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching bids',
            error: error.message
        });
    }
});



// Get all crops where the logged-in user placed bids
router.get('/my-bids', auth(), async (req, res) => {
    try {
        const buyerId = req.user.id; // authMiddleware sets req.user

        // Fetch all bids by this buyer
        const bids = await Bid.find({ buyerId })
            .populate({
                path: 'cropId',
                select: 'cropName quantity price images status farmerId harvestDate',
                populate: { path: 'farmerId', select: 'firstName lastName' } // optional
            })
            .sort({ createdAt: -1 });

        const crops = bids.map(bid => ({
            bidId: bid._id,
            crop: bid.cropId,
            bidAmount: bid.bidAmount,
            status: bid.status,
            message: bid.message
        }));

        res.json({ success: true, crops });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;

