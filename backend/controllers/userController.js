import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import { generateToken } from "../utils/generateToken.js";



export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});





export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, picture } = req.body;
  if (!name || !email || !password) {
    throw new Error("Please enter all the fileds");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ email, password, name, picture });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(500);
    throw new Error("Failed to create the user");
  }
});
