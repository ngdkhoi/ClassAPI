import express from "express";
const app = express();
import { urlencoded, json } from "body-parser";
import pkg from 'mongoose';
let { connect, Promise } = pkg;
import ClassRoutes from "./api/routes/ClassRoutes.js";
import Connect from './db/connect.js';
import cors from 'cors'

Connect()
    .then(() => console.log("connect db success"))
    .catch(err => console.log("connect db faild: ", err))
Promise = global.Promise;

app.use(cors())
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.json());

// Routes which should handle requests
app.use("/", ClassRoutes);

export default app;