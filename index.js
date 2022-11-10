// const express = require("express"); // common js
import express from 'express'; // "type": "module"
import { MongoClient } from "mongodb";
import moviesRouter from "./routes/movies.route.js";
import * as dotenv from "dotenv"; 
dotenv.config();

console.log(process.env.MONGO_URL); // env -> environment variables

const app = express();
console.log("good day")
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); //phone dial
// top-level await
await client.connect(); // call button
console.log("Mongo is connected ✔✔✔")

// express.json() - middleware (inbuilt) | Converts data to JSON
// app.use - Intercepts -> applies express.json()
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 Today is pretty cool");
});

app.use("/movies", moviesRouter);
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

// GET
// POST
// DELETE
// PUT

export {client};

