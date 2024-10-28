const express = require("express");
const router = express.Router();

const {addbook, getbycat, remove, update} = require("../controller/bookController");



router.post("/addbook",  addbook);

router.get("/getbycat",  getbycat);

router.delete("/remove/id/:id",  remove);

router.put("/updatebook/id/:id",  update);

module.exports = router;