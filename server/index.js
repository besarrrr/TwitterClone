import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"

const app = express();
dotenv.config();

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("sucecess");
    })
    .catch((err) => {throw err})
};

app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(8000, () => {
 connect();
 console.log("Nice")
});   
