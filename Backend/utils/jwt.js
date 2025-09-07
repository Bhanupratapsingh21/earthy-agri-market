import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

// Use environment variables with fallbacks
const ACCESS_EXPIRES_IN = "1d";
const REFRESH_EXPIRES_IN = "7d";

console.log('ACCESS_EXPIRES_IN:', ACCESS_EXPIRES_IN);
console.log('REFRESH_EXPIRES_IN:', REFRESH_EXPIRES_IN);

// Validate required environment variables
if (!ACCESS_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
}
if (!REFRESH_SECRET) {
    throw new Error('JWT_REFRESH_SECRET environment variable is required');
}

export function signAccessToken(payload) {
    try {
        return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES_IN });
    } catch (error) {
        throw new Error(`Failed to sign access token: ${error.message}`);
    }
}

export function signRefreshToken(payload) {
    try {
        return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });
    } catch (error) {
        throw new Error(`Failed to sign refresh token: ${error.message}`);
    }
}

export function verifyAccessToken(token) {
    try {
        return jwt.verify(token, ACCESS_SECRET);
    } catch (error) {
        // Handle specific JWT errors[63][58]
        if (error.name === 'TokenExpiredError') {
            throw new Error('Access token expired');
        } else if (error.name === 'JsonWebTokenError') {
            throw new Error('Invalid access token');
        } else if (error.name === 'NotBeforeError') {
            throw new Error('Access token not active yet');
        } else {
            throw new Error(`Access token verification failed: ${error.message}`);
        }
    }
}

export function verifyRefreshToken(token) {
    try {
        return jwt.verify(token, REFRESH_SECRET);
    } catch (error) {
        // Handle specific JWT errors
        if (error.name === 'TokenExpiredError') {
            throw new Error('Refresh token expired');
        } else if (error.name === 'JsonWebTokenError') {
            throw new Error('Invalid refresh token');
        } else if (error.name === 'NotBeforeError') {
            throw new Error('Refresh token not active yet');
        } else {
            throw new Error(`Refresh token verification failed: ${error.message}`);
        }
    }
}

// Utility function to decode token without verification (for debugging)
export function decodeToken(token) {
    try {
        return jwt.decode(token);
    } catch (error) {
        throw new Error(`Failed to decode token: ${error.message}`);
    }
}

// Get token expiration time
export function getTokenExpiration(token) {
    try {
        const decoded = jwt.decode(token);
        return decoded?.exp ? new Date(decoded.exp * 1000) : null;
    } catch (error) {
        return null;
    }
}

// Check if token is expired without verification
export function isTokenExpired(token) {
    try {
        const decoded = jwt.decode(token);
        if (!decoded?.exp) return true;
        return Date.now() >= decoded.exp * 1000;
    } catch (error) {
        return true;
    }
}
