// import express from "express";
const express = require("express");
const dotenv = require("dotenv");

// const colors = require("colors");y
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

// import dotenv from "dotenv";
// import colors from "colors";
// import cors from "cors";
// import mongoose from "mongoose";
// import morgan from "morgan";
// const connectDB = require("./database/db.js")
// const UserRouter = require("./router/UserRoute.js")
// const adminRoutes = require("./routes/adminRoutes.js")
// const doctorRoutes = require("./routes/doctorRoutes.js")

// import connectDB from "./database/db.js";
// import UserRoute from "./routes/UserRoute.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import doctorRoutes from "./routes/doctorRoutes.js";

const indexfile = require("./router/index.js");

// DOTENV CONFIGURATION
dotenv.config();

// DATABASE CONFIGURATION
// connectDB();

// REST OBJ
const app = express();

//******** MIDDLEWARE *******/
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", indexfile);

// ***** MIDDLEWARE ROUTES * ****/
// app.use("/api/v1/auth", UserRoute);
// app.use("/api/v1/admin", adminRoutes);
// app.use("/api/v1/doctor", doctorRoutes);

//******** PORTS AND LISTEN *******/
// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(
//     `Node server running in ${process.env.DEV_MODE} mode on Port ${port}.`
//       .bgBrightMagenta.white
//   );
// });
const dbURI = `mongodb+srv://Vihang:LlN2reduqeSUv9z9@cluster0.0tq4xsw.mongodb.net/library_managment?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(4545);
    console.log("MongoDB connected...");
  })
  .catch((err) => console.log(err));
