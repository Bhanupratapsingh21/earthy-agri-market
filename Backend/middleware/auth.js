import { resError } from '../utils/response.js';
import { verifyAccessToken } from '../utils/jwt.js';
import User from '../models/User.js';

export const authMiddleware = () => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return resError(res, 'No token provided', 'Unauthorized', 401);
            }

            const token = authHeader.split(' ')[1];
            if (!token) {
                return resError(res, 'No token provided', 'Unauthorized', 401);
            }

            // Your verifyAccessToken function will throw specific errors
            const payload = verifyAccessToken(token);

            // Find user using the userId from payload
            const user = await User.findById(payload.userId).exec();
            if (!user) {
                return resError(res, 'User not found', 'Unauthorized', 401);
            }

            req.user = user;

            next();
        } catch (err) {
            console.error('Auth Middleware Error:', err.message);
            return resError(res, err.message, 'Authentication failed', 401);
        }
    };
};

export default authMiddleware;
