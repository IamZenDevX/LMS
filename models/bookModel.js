const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  alternatetitle: {
    type: String,
  },
  author: {
    type: String,
  },
  language: {
    type: String,
  },
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bookcategory",
  },
  publisher: {
    type: String,
  },
  bookcountavailable: {
    type: String,
  },
  bookstatus: {
    type: String,
    default: "Available",
  },
  transactions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "booktransaction",
  },
});

module.exports = mongoose.model("book", bookSchema);
