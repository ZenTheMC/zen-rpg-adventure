import mongoose, { Document, Schema } from "mongoose";

export interface ICharacter extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  level: number;
  experience: number;
  // Additional fields
}

const CharacterSchema = new Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  level: { type: Number, default: 1 },
  experience: { type: Number, default: 0 },
  // Additional fields
});

export default mongoose.model<ICharacter>("Character", CharacterSchema);
