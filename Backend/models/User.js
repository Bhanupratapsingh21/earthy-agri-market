const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], default: 'other' },
    role: { type: String, enum: ['farmer', 'buyer'], required: true },
    profileImage: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    refreshTokens: { type: [String], default: [] },
    activeRefreshToken: { type: String, default: null },
});

module.exports = mongoose.model('User', userSchema);
