// src/index.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import usersRouter from "./routes/users";
import charactersRouter from "./routes/characters";
import inventoryRouter from "./routes/inventory";
import questsRouter from "./routes/quests";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/users", usersRouter);
app.use("/api/characters", charactersRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/quests", questsRouter);

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Frontend URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("attack", (data) => {
    // Handle attack logic
    io.emit("attackResult", {
      /* ... */
    });
  });

  socket.on("move", (data) => {
    // Handle move logic
    io.emit("moveResult", {
      /* ... */
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start Server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app };
