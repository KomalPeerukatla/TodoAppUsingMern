import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
import User from "../models/user.js";


export const signup=async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ success: false, message: "email already used" });
    }
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashed });
    return res.json({ success: true, message: "Registered" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const signin=async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Not Found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({ success: false, message: "wrong password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.Jwt_Secret);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};