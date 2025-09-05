import { resError } from "../utils/responses.js";
import { verifyAccessToken } from "../utils/jwt.js";
import User from "../models/User.js";

export const authMiddleware = (roles = []) => {
    return async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return resError(res, "No token provided", "Unauthorized", 401);
        }

        const token = authHeader.split(" ")[1];

        try {
            const payload = verifyAccessToken(token);

            const user = await User.findById(payload.userId);
            if (!user) {
                return resError(res, "", "User not found", 401);
            }
            req.user = user;

            if (roles.length && !roles.includes(user.role)) {
                return resError(res, "", "Forbidden: insufficient role", 403);
            }
            return next();
        } catch (err) {
            return resError(res, err, "Invalid token", 401);
        }
    };
};
