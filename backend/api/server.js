import express from 'express';
import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
import mongoose from 'mongoose';

const app = express();

dotenv.config();
// const PORT = process.env.PORT || 3000;

const connect = async() => {
  
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!")
  } catch (error) {
    console.log(error);
  }
}


app.listen(3000, () => {
  connect();
  console.log("Server Started at http//localhost:3000")
})