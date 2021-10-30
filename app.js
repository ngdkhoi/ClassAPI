import express from "express";
const app = express();
import { urlencoded, json } from "body-parser";
import pkg from 'mongoose';
let { connect, Promise } = pkg;
import ClassRoutes from "./api/routes/ClassRoutes.js";
import Connect from './db/connect.js';
// import { config } from 'dotenv';

// config();
// const uri = process.env.URI;
// connect(
//     uri,
//     {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//     }
// );
Connect()
    .then(() => console.log("connect db success"))
    .catch(err => console.log("connect db faild: ", err))
Promise = global.Promise;

app.use(urlencoded({ extended: false }));
app.use(json());

// Routes which should handle requests
app.use("/", ClassRoutes);

export default app;