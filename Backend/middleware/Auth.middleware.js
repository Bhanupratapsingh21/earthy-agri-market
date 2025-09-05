import { resError } from '../utils/response.js';
import { verifyAccessToken } from '../utils/jwt.js';
import User from '../models/User.js';

export const authMiddleware2 = () => {
    return async (req, res, next) => {
        try {
            // Extract token from header or cookies
            let token = null;
            const authHeader = req.headers.authorization;

            if (authHeader && authHeader.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            } else if (req.cookies?.accessToken) {
                token = req.cookies.accessToken;
            }

            if (!token) {
                return resError(res, 'No token provided', 'Unauthorized', 401);
            }

            // Verify token and get payload
            const payload = verifyAccessToken(token);

            // Find user
            const user = await User.findById(payload._id).select('-password -refreshToken');
            if (!user) {
                return resError(res, 'Invalid access token', 'Unauthorized', 401);
            }

            req.user = user;

            next();
        } catch (err) {
            console.error('Auth Middleware Error:', err.message);
            return resError(res, 'Invalid or expired token', 'Authentication failed', 401);
        }
    };
};

export default authMiddleware2;
