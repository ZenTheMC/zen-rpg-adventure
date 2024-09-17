import mongoose, { Document, Schema } from "mongoose";

export interface IInventoryItem extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  quantity: number;
  // Additional fields
}

const InventoryItemSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  // Additional fields
});

export default mongoose.model<IInventoryItem>(
  "InventoryItem",
  InventoryItemSchema
);
