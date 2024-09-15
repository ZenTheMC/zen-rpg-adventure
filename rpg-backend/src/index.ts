// src/index.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/your-game-db", {
    // useNewUrlParser: true, // No longer necessary in newer versions
    // useUnifiedTopology: true, // No longer necessary in newer versions
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/characters", require("./routes/characters"));
app.use("/api/inventory", require("./routes/inventory"));
app.use("/api/quests", require("./routes/quests"));

// Socket.io Setup
import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Frontend URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start Server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import dotenv from "dotenv"; // dotenv no longer needed in Node v20.6, but I'm using v18.18 apparently.)
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
