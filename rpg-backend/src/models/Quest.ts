import mongoose, { Document, Schema } from "mongoose";

export interface IQuest extends Document {
  name: string;
  description: string;
  isCompleted: boolean;
  // Additional fields
}

const QuestSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  isCompleted: { type: Boolean, default: false },
  // Additional fields
});

export default mongoose.model<IQuest>("Quest", QuestSchema);
