import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

app.listen(3001, () => {
 connect();
 console.log("Nice")
});   
