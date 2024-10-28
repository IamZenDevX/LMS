const mongoose = require("mongoose");

const booktransactionSchema = new mongoose.Schema({
  bookId: {
    type: String,
  },
  borrowerId: {
    type: String,
  },
  bookname: {
    type: String,
  },
  borrowername: {
    type: String,
  },
  transactiontype: {
    type: String,
  },
  fromdate: {
    type: Date,
  },
  todate: {
    type: Date,
  },
  returndate: {
    type: Date,
  },
  transactionstatus: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("booktransaction", booktransactionSchema);
