import bcrypt from "bcryptjs";
import { resError, resSuccess } from "../utils/response.js";
import User from "../models/User.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/jwt.js";


// 1. User register
export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, gender, role } = req.body;

        const errors = [];
        if (!firstName) errors.push("firstname");
        if (!email) errors.push("email");
        if (!phone) errors.push("phone");
        if (!password) errors.push("password");
        if (!role) errors.push("role");

        if (errors.length > 0) {
            return resError(
                res,
                `Missing required fields: ${errors.join(", ")}`,
                "Validation failed",
                400
            );
        }

        const existing = await User.findOne({ $or: [{ email }, { phone }] });
        if (existing) {
            return resError(
                res,
                "Duplicate",
                "User already exists with provided email or phone",
                409
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);



        const user = await User.create({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
            gender,
            role,
            refreshTokens: [],
        });

        if (!user) {
            return resError(res, null, "Error while creating user", 500);
        }

        const payload = { userId: user._id.toString(), email: user.email };
        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);

        user.refreshTokens = [refreshToken];
        user.activeRefreshToken = refreshToken;
        await user.save();

        const userObj = user.toObject();
        delete userObj.password;
        delete userObj.refreshTokens;

        return resSuccess(
            res,
            { user: userObj, accessToken, refreshToken },
            "User registered successfully!",
            201
        );
    } catch (err) {
        console.error(err);
        return resError(res, err, "Error while registering user", 500);
    }
};

// 2. User login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return resError(res, null, "Credentials are required", 400);
        }
        const user = await User.findOne({ email });

        if (!user) {
            return resError(res, null, `User not registered with email: ${email}`, 400);
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return resError(res, null, "Invalid credentials", 400);

        const payload = { userId: user._id.toString(), email: user.email };
        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);

        user.refreshTokens = [refreshToken];
        user.activeRefreshToken = refreshToken;
        await user.save();

        const userObj = user.toObject();
        delete userObj.password;
        delete userObj.refreshTokens;

        return resSuccess(
            res,
            { user: userObj, accessToken, refreshToken },
            "Login successful!",
            200
        );
    } catch (err) {
        console.error(err);
        return resError(res, err, "Login failed!", 500);
    }
};

// 3. Refresh token handler
export const refreshTokenHandler = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) return resError(res, null, "Refresh token required", 400);

        let payload;
        try {
            payload = verifyRefreshToken(refreshToken);
        } catch (err) {
            return resError(res, err, "Invalid refresh token", 401);
        }

        const user = await User.findById(payload.userId);
        if (!user || !user.refreshTokens.includes(refreshToken)) {
            return resError(res, null, "User not found or token invalid", 404);
        }

        if (user.activeRefreshToken !== refreshToken) {
            return resError(res, null, "Session expired. Please login again.", 401);
        }

        const newAccessToken = signAccessToken({
            userId: user._id.toString(),
            email: user.email,
        });
        const newRefreshToken = signRefreshToken({
            userId: user._id.toString(),
            email: user.email,
        });

        user.refreshTokens = [newRefreshToken];
        user.activeRefreshToken = newRefreshToken;
        await user.save();

        const userObj = user.toObject();
        delete userObj.password;
        delete userObj.refreshTokens;
        console.log("token refreshed")
        return resSuccess(
            res,
            { user: userObj, accessToken: newAccessToken, refreshToken: newRefreshToken },
            "Token refreshed successfully",
            200
        );
    } catch (err) {
        console.error(err);
        return resError(res, err, "Error refreshing token", 500);
    }
};

// 4. Logout
export const logout = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) return resError(res, null, "Refresh token required", 400);

        let payload;
        try {
            payload = verifyRefreshToken(refreshToken);
        } catch (err) {
            return resError(res, err, "Invalid refresh token", 403);
        }

        const user = await User.findById(payload.userId);
        if (!user) return resError(res, null, "Invalid refresh token", 403);

        user.refreshTokens = [];
        user.activeRefreshToken = null;
        await user.save();

        return resSuccess(res, null, "Logged out successfully", 200);
    } catch (err) {
        console.error(err);
        return resError(res, err, "Logout failed", 500);
    }
};
