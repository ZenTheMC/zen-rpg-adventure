import express from "express";
import { getQuests } from "../controllers/questsController";

const router = express.Router();

router.get("/", getQuests);

export default router;
