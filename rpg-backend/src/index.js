"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// MongoDB Connection
mongoose_1.default
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
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
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
const dotenv_1 = __importDefault(require("dotenv")); // dotenv no longer needed in Node v20.6, but I'm using v18.18 apparently.)
dotenv_1.default.config();
mongoose_1.default
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
