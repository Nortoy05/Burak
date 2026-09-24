// Architectural pattern: MVC, Dependency Injection, MVP

// MVC = MODEL VIEW CONTROLLER

// Design pattern: Midddleware, Decotar



import dotenv from "dotenv";
dotenv.config();

// console.log("PORT:", process.env.PORT);

// console.log("MONGO_URL:", process.env.MONGO_URL);



// CLUSTER => DATABASE => COLLECTION => DOCUMENT



 import mongoose from "mongoose";

 mongoose
 .connect(process.env.MONGO_URL as string, {})
 .then((data) => {
    console.log("MongoDb connection succeed");
    const PORT = process.env.PORT ?? 5005;
 })
 .catch((err) => console.log("ERROR on connection MongoDB", err));