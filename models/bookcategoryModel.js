const mongoose = require("mongoose");

const bookcategorySchema = new mongoose.Schema({
  categoryname: {
    type: String,
  },
  book: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
  }],
});

module.exports = mongoose.model("bookcategory", bookcategorySchema);
