const express = require("express");
const dotenv = require("dotenv");


const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");



const indexfile = require("./router/index.js");

// DOTENV CONFIGURATION
dotenv.config();



// REST OBJ
const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", indexfile);


const dbURI = `mongodb://localhost:27017/`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(4545);
    console.log("MongoDB connected...");
  })
  .catch((err) => console.log(err));
