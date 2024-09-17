import express from "express";
import { getInventory } from "../controllers/inventoryController";
import { authenticateJWT } from "../middleware/auth";

const router = express.Router();

router.get("/", authenticateJWT, getInventory);

export default router;
