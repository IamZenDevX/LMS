const express = require("express");
const router = express.Router();

const {register, signin} = require("../controller/authController");



router.post("/register",  register);

router.post("/signin",  signin);

module.exports = router;