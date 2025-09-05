import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import routes from './router/index.js';
import cors from 'cors';
import multer from 'multer';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'authorization'],
        credentials: true
    })
);

// Routes
app.use('/api', routes);
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});
// Using ES6 import - assuming crops.js and bids.js exist in ./router folder and are default exports
import cropsRouter from './router/crops.js';
import bidsRouter from './router/bids.js';
app.use('/api/crops', cropsRouter);
app.use('/api/bids', bidsRouter);

app.get('/', (req, res) => res.json({ ok: true, time: new Date() }));

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});

// Multer error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File too large. Maximum size is 5MB'
            });
        }
        if (error.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({
                success: false,
                message: 'Too many files. Maximum is 5 files'
            });
        }
    }

    res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong!'
    });
});

try {
    const server = app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`);
    });

    server.on('error', err => {
        console.error(' Server failed to start:', err.message);
        process.exit(1);
    });
} catch (err) {
    console.error(' Unexpected error occurred:', err.message);
    process.exit(1);
}
