import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import cors from "cors";
import connectDB from './config/db.js';

const PORT=3000;
dotenv.config();
connectDB();
const app=express();
app.use(cors({ origin: "http://localhost:5173"}))
app.use(express.json());


app.use("/auth", authRoutes);
app.use("/todos",todoRoutes);

app.listen(PORT,()=>
console.log(`server running on ${PORT}`)
);


