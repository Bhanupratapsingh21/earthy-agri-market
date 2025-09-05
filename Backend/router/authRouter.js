import { Router } from "express";
import { logout, login, register, refreshTokenHandler } from "../controllers/authController.js";


const router = Router();

router.post("/register", register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refreshTokenHandler);

export default router;