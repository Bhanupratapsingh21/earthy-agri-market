import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

const ACCESS_EXPIRES_IN = "1d";
const REFRESH_EXPIRES_IN = "7d";

console.log('ACCESS_EXPIRES_IN:', ACCESS_EXPIRES_IN); // should log '1d'
console.log('REFRESH_EXPIRES_IN:', REFRESH_EXPIRES_IN); // should log '7d'

export function signAccessToken(payload) {
    return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRES_IN });
}

export function signRefreshToken(payload) {
    return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRES_IN });
}

export function verifyAccessToken(token) {
    return jwt.verify(token, ACCESS_SECRET);
}

export function verifyRefreshToken(token) {
    return jwt.verify(token, REFRESH_SECRET);
}
