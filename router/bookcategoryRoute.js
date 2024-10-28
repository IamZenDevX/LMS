const express = require("express");
const router = express.Router();

const {addbookcat, getcategory} = require("../controller/bookcategoryController");



router.post("/addbookcat",  addbookcat);

router.get("/getcat",  getcategory);

module.exports = router;