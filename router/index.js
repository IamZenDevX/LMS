const express = require("express");
const router = express.Router();

const authRoute = require("./authRoute");
const bookRoute = require("./bookRoute");
const bookcategoryRoute = require("./bookcategoryRoute");
const booktarnasctionRoute = require("./booktarnasctionRoute");
const UserRoute = require("./UserRoute");

router.use("/auth", authRoute);
router.use("/book", bookRoute);
router.use("/bookcategory", bookcategoryRoute);
router.use("/booktarnasction", booktarnasctionRoute);
router.use("/user", UserRoute);

module.exports = router;
