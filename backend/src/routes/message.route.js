import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersForSidebarHandler,
  getMessagesHandler,
  sendMessagesHandler
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebarHandler);
router.get("/:id", protectRoute, getMessagesHandler);
router.get("/send/:id", protectRoute, sendMessagesHandler);
export default router;
