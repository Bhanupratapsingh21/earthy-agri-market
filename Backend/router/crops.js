import express from 'express';
const router = express.Router();
import Crop from '../models/Crop.js';
import { authMiddleware } from '../middleware/auth.js';
import { uploadMultipleImagesToCloudinary, deleteFromCloudinary } from '../middleware/uploadToCloudinary.js';
import User from '../models/User.js';

// Create a new crop listing
router.post('/',
    authMiddleware(),
    uploadMultipleImagesToCloudinary('images', 5, 'farmers-marketplace/crops'),
    async (req, res) => {
        try {
            const cropData = {
                ...req.body,
                farmerId: req.user._id
            };

            // Add uploaded images to crop data
            if (req.cloudinaryResults && req.cloudinaryResults.length > 0) {
                cropData.images = req.cloudinaryResults.map(result => ({
                    url: result.url,
                    publicId: result.publicId,
                    alt: req.body.name || 'Crop image'
                }));
            }

            const crop = new Crop(cropData);
            await crop.save();
            await crop.populate('farmerId', 'firstName lastName email phone location');

            res.status(201).json({
                success: true,
                data: crop,
                message: 'Crop listed successfully with images uploaded'
            });
        } catch (error) {
            // Clean up uploaded images if crop creation fails
            if (req.cloudinaryResults) {
                req.cloudinaryResults.forEach(async (result) => {
                    await deleteFromCloudinary(result.publicId);
                });
            }
            res.status(400).json({ success: false, message: error.message });
        }
    }
);


// PUT /api/crops/:id - Update crop with optional new images
router.put('/:id',
    authMiddleware(),
    uploadMultipleImagesToCloudinary('images', 5, 'farmers-marketplace/crops'),
    async (req, res) => {
        try {
            const crop = await Crop.findOne({
                _id: req.params.id,
                farmerId: req.user._id
            });

            if (!crop) {
                // Clean up uploaded images if crop not found
                if (req.cloudinaryResults) {
                    req.cloudinaryResults.forEach(async (result) => {
                        await deleteFromCloudinary(result.publicId);
                    });
                }
                return res.status(404).json({
                    success: false,
                    message: 'Crop not found or unauthorized'
                });
            }

            // Handle image updates
            if (req.cloudinaryResults && req.cloudinaryResults.length > 0) {
                // Delete old images if replace_images is true
                if (req.body.replace_images === 'true' && crop.images) {
                    for (const image of crop.images) {
                        if (image.publicId) {
                            await deleteFromCloudinary(image.publicId);
                        }
                    }
                    req.body.images = req.cloudinaryResults.map(result => ({
                        url: result.url,
                        publicId: result.publicId,
                        alt: req.body.name || 'Crop image'
                    }));
                } else {
                    // Append new images to existing ones
                    const newImages = req.cloudinaryResults.map(result => ({
                        url: result.url,
                        publicId: result.publicId,
                        alt: req.body.name || 'Crop image'
                    }));
                    req.body.images = [...(crop.images || []), ...newImages];
                }
            }

            Object.assign(crop, req.body);
            await crop.save();

            res.json({
                success: true,
                data: crop,
                message: 'Crop updated successfully'
            });
        } catch (error) {
            // Clean up uploaded images if update fails
            if (req.cloudinaryResults) {
                req.cloudinaryResults.forEach(async (result) => {
                    await deleteFromCloudinary(result.publicId);
                });
            }
            res.status(400).json({ success: false, message: error.message });
        }
    }
);

// DELETE /api/crops/:id - Delete crop and cleanup images
router.delete('/:id', authMiddleware(), async (req, res) => {
    try {
        const crop = await Crop.findOne({
            _id: req.params.id,
            farmerId: req.user._id
        });

        if (!crop) {
            return res.status(404).json({
                success: false,
                message: 'Crop not found or unauthorized'
            });
        }

        // Delete images from Cloudinary
        if (crop.images && crop.images.length > 0) {
            for (const image of crop.images) {
                if (image.publicId) {
                    await deleteFromCloudinary(image.publicId);
                }
            }
        }

        await Crop.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Crop and associated images deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


// Get all crop listings with filters
router.get('/', async (req, res) => {
    try {
        const {
            category,
            location,
            minPrice,
            maxPrice,
            isAuction,
            sortBy = 'createdAt',
            order = 'desc',
            page = 1,
            limit = 10
        } = req.query;

        const query = { status: 'active' };

        if (category) query.category = category;
        if (location) query.location = new RegExp(location, 'i');
        if (minPrice) query.basePrice = { $gte: minPrice };
        if (maxPrice) query.basePrice = { ...query.basePrice, $lte: maxPrice };
        if (isAuction !== undefined) query.isAuction = isAuction === 'true';

        const crops = await Crop.find(query)
            .populate('farmerId', 'name email phone')
            .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const totalCrops = await Crop.countDocuments(query);

        res.json({
            success: true,
            crops,
            totalPages: Math.ceil(totalCrops / limit),
            currentPage: page,
            totalCrops
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching crops',
            error: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cropId = req.params.id;

        // Get crop with farmer details
        const crop = await Crop.findById(cropId)
            .populate('farmerId', 'firstName lastName email phone role createdAt')
            .exec();

        if (!crop) {
            return res.status(404).json({
                success: false,
                message: 'Crop not found'
            });
        }

        // Get related crops from same farmer
        const relatedCrops = await Crop.find({
            farmerId: crop.farmerId._id,
            _id: { $ne: cropId },
            status: 'active'
        })
            .select('cropName category price images')
            .limit(4);

        // Get bid statistics if it's an auction
        let bidStats = null;
        if (crop.priceType === 'auction') {
            const bids = await Bid.find({ crop: cropId, status: { $ne: 'withdrawn' } });
            bidStats = {
                totalBids: bids.length,
                highestBid: Math.max(...bids.map(bid => bid.amount), 0),
                averageBid: bids.length > 0
                    ? bids.reduce((sum, bid) => sum + bid.amount, 0) / bids.length
                    : 0,
                uniqueBidders: [...new Set(bids.map(bid => bid.bidder.toString()))].length
            };
        }

        // Get recent bid activity (last 5 bids for auctions)
        const recentBids = crop.priceType === 'auction'
            ? await Bid.find({ crop: cropId, status: { $ne: 'withdrawn' } })
                .populate('bidder', 'firstName lastName email')
                .sort({ createdAt: -1 })
                .limit(5)
                .select('amount createdAt bidder')
            : [];

        res.json({
            success: true,
            data: {
                crop,
                relatedCrops,
                bidStats,
                recentBids
            }
        });
    } catch (error) {
        console.error('Error fetching crop details:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});


router.get('/:id/bids', authMiddleware(), async (req, res) => {
    try {
        const { page = 1, limit = 10, status } = req.query;
        const cropId = req.params.id;

        // Verify crop ownership
        const crop = await Crop.findById(cropId);
        if (!crop) {
            return res.status(404).json({ success: false, message: 'Crop not found' });
        }

        if (crop.farmer.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view bids for this crop'
            });
        }

        const query = { crop: cropId };
        if (status) query.status = status;

        const bids = await Bid.find(query)
            .populate('bidder', 'name email phone location rating')
            .sort({ amount: -1, createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Bid.countDocuments(query);

        res.json({
            success: true,
            data: bids,
            pagination: {
                current: Number(page),
                pages: Math.ceil(total / limit),
                total
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// GET /api/crops/farmer/:farmerId - Get all crops by specific farmer
router.get('/farmer/:farmerId', async (req, res) => {
    try {
        const { page = 1, limit = 10, status } = req.query;
        const farmerId = req.params.farmerId;

        const query = { farmerId };
        if (status) query.status = status;

        const crops = await Crop.find(query)
            .populate("farmerId", "firstName lastName email")
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));

        const total = await Crop.countDocuments(query);

        const farmer = await User.findById(farmerId).select(
            "firstName lastName email location rating totalSales joinedDate bio"
        );

        res.json({
            success: true,
            data: {
                farmer,
                crops,
                pagination: {
                    current: Number(page),
                    pages: Math.ceil(total / limit),
                    total,
                },
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get('/categories/list', async (req, res) => {
    try {
        const categories = await Crop.aggregate([
            { $match: { status: 'active' } },
            {
                $group: {
                    _id: '$category',
                    count: { $sum: 1 },
                    avgPrice: { $avg: '$price.basePrice' },
                    minPrice: { $min: '$price.basePrice' },
                    maxPrice: { $max: '$price.basePrice' }
                }
            },
            { $sort: { count: -1 } }
        ]);

        res.json({
            success: true,
            data: categories.map(cat => ({
                name: cat._id,
                count: cat.count,
                priceRange: {
                    min: Math.round(cat.minPrice),
                    max: Math.round(cat.maxPrice),
                    average: Math.round(cat.avgPrice)
                }
            }))
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// GET /api/crops/search/suggestions - Get search suggestions
router.get('/search/suggestions', async (req, res) => {
    try {
        const { q } = req.query;

        if (!q || q.length < 2) {
            return res.json({ success: true, data: [] });
        }

        const suggestions = await Crop.find({
            $and: [
                { status: 'active' },
                {
                    $or: [
                        { name: new RegExp(q, 'i') },
                        { category: new RegExp(q, 'i') },
                        { 'location.state': new RegExp(q, 'i') },
                        { 'location.district': new RegExp(q, 'i') }
                    ]
                }
            ]
        })
            .select('name category location')
            .limit(10);

        // Extract unique suggestions
        const uniqueSuggestions = [
            ...new Set([
                ...suggestions.map(crop => crop.name),
                ...suggestions.map(crop => crop.category),
                ...suggestions.map(crop => crop.location.district).filter(Boolean),
                ...suggestions.map(crop => crop.location.state).filter(Boolean)
            ])
        ].filter(suggestion =>
            suggestion.toLowerCase().includes(q.toLowerCase())
        ).slice(0, 8);

        res.json({
            success: true,
            data: uniqueSuggestions
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router