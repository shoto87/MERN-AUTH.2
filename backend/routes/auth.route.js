import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);

router.post("/login", login);
// logout

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
export default router;
