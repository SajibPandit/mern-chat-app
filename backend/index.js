import express from "express";
import colors from "colors";
import { chats } from "./data/data.js";
import { connectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddlewares.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

//connect with database
connectDB();
app.use(express.json());

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => console.log("Server Started!".yellow.bold));
