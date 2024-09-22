import express from "express";
import {
  createCharacter,
  getCharacters,
} from "../controllers/charactersController";
import { authenticateJWT } from "../middleware/auth";

const router = express.Router();

router.post("/", authenticateJWT, createCharacter);
router.get("/", authenticateJWT, getCharacters);

export default router;

// comment for reach
