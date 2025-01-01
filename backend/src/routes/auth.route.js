import express from "express";
import {
  loginHandler,
  logoutHandler,
  signupHandler,
  updateProfileHandler,
  checkAuthHandler
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupHandler);
router.post("/login", loginHandler);
router.post("/logout", logoutHandler);

router.put("/update-profile", protectRoute, updateProfileHandler);

router.get('/check', protectRoute, checkAuthHandler)
export default router;
