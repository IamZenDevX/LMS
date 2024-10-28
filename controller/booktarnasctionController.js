const booktransaction = require("../models/booktransactionModel");
const jwt = require("jsonwebtoken");

exports.addbooktran = async (req, res, next) => {
  const {
    bookId,
    bookname,
    borrowerId,
    borrowername,
    fromdate,
    returndate,
    todate,
    transactionstatus,
    isadmin,
    transactiontype,
  } = req.body;

  let valid;
  const secrect_key = "thisisscsbdvchjbdre";

  if (isadmin != true) {
    return res.json("you have no rights");
  }

  let token = req.headers.authorization.split(" ")[1];
  console.log("token");

  if (!token) {
    return res.send("No Token found!");
  }

  try {
    valid = jwt.verify(token, secrect_key);

    let createdbooktransaction = await booktransaction.create({
      borrowername,
      todate,
      returndate,
      bookId,
      bookname,
      transactiontype,
      borrowerId,
      transactionstatus,
      fromdate,
    });

    return res.json(createdbooktransaction);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deletetran = async (req, res, next) => {
  const { isadmin } = req.body;
  const { id } = req.params;
  const deletedbooktransaction = await booktransaction.findByIdAndDelete(id);
  res.send(deleted);
};

exports.gettran = async (req, res, next) => {
  let var_booktransaction_List;
  var_booktransaction_List = await booktransaction.find(
    {},
    "borrowername bookname todate borrowerId bookId transactiontype fromdate returndate transactionstatus "
  );
  res.json(var_booktransaction_List);
};

exports.updatetran = async (req, res, next) => {
  const { 
    isadmin,
    borrowername,
    fromdate,
    returndate,
    todate,
    transactionstatus,
    transactiontype,
  } = req.body;
  const { id } = req.params;
  try {
    if (isadmin) {
      const updatedbooktransaction = await booktransaction.findByIdAndUpdate(
        id,
        {
          transactionstatus: transactionstatus,
          borrowername: borrowername,
          fromdate: fromdate,
          transactiontype: transactiontype,
          returndate: returndate,
          todate: todate,
        },
        { new: true }
      );
      res.json(updatedbooktransaction);
    } else {
    }
  } catch (err) {}
};
