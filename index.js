import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.listen(3000, () => {
    console.log(`Server started. Listening of port ${port}.`)
})

console.log(process.env.CLIENT_SECRET);