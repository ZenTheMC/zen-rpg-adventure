// src/index.ts
import mongoose from "mongoose";
import { Server } from "socket.io";

mongoose.connect("mongodb://localhost:27017/your-game-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
});
