import { Request, Response } from "express";
import InventoryItem from "../models/InventoryItem";

export const getInventory = async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;

  try {
    const inventory = await InventoryItem.find({ userId });
    res.json(inventory);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
