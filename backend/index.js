import express from "express";
import { chats } from "./data/data.js";
const app = express();

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(5000);
