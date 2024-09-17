import { Request, Response } from "express";
import Character from "../models/Character";

export const createCharacter = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  const { name } = req.body;

  try {
    const character = new Character({ userId, name });
    await character.save();
    res.status(201).json(character);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export const getCharacters = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;

  try {
    const characters = await Character.find({ userId });
    res.json(characters);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
