const express = require("express");
const router = express.Router();

const {addbooktran, deletetran, gettran, updatetran} = require("../controller/booktarnasctionController");



router.post("/addbooktran",  addbooktran);

router.delete("/deletetran/id/:id",  deletetran);

router.get("/gettran",  gettran);

router.put("/updatetran/id/:id",  updatetran);

module.exports = router;