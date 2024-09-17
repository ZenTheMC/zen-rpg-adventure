import { Request, Response } from "express";
import Quest from "../models/Quest";

export const getQuests = async (_req: Request, res: Response) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
