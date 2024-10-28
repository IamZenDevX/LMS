const express = require("express");
const router = express.Router();

const {adduser, deleteuser, getuser, updateuser} = require("../controller/UserController");



router.post("/adduser",  adduser);

router.delete("/deleteuser/id/:id",  deleteuser);

router.get("/getuser/id/:id",  getuser);

router.put("/updateuser/id/:id",  updateuser);

module.exports = router;