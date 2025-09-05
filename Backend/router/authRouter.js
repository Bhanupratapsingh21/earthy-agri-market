import { Router } from "express";
import { logout, login, register, refreshTokenHandler } from "../controllers/authController.js";
import upload from "../config/multer.js";

const router = Router();

router.post("/register", upload.single("profileImage"), register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refreshTokenHandler);

export default router;