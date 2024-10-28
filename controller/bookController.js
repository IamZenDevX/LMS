const book = require("../models/bookModel");
const bookcategory = require("../models/bookcategoryModel");

exports.addbook = async (req, res, next) => {
  const {
    alternatetitle,
    author,
    bookcountavailable,
    bookname,
    bookstatus,
    categories,
    language,
    publisher,
    transactions,
  } = req.body;
  let createdbook;
  createdbook = await book.create({
    bookstatus,
    author,
    categories,
    bookname,
    transactions,
    bookcountavailable,
    publisher,
    language,
    alternatetitle,
  });
  res.json(createdbook);
};

exports.getbycat = async (req, res, next) => {
  const { category } = req.query;
  try {
    let var_bookcategory_List;
    var_bookcategory_List = await bookcategory.findOne(
      {
        categoryname: category,
      },
      "book "
    );
  } catch (err) {
    //		return res.status(504).json(err)
    return res.status(504).json(err);
  }
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  const deletedbook = await book.findByIdAndDelete(id);
  res.send(Deleted);
};

exports.update = async (req, res, next) => {
  const {
    isadmin,
    alternatetitle,
    author,
    bookcountavailable,
    bookname,
    categories,
    bookstatus,
    language,
    transactions,
    publisher,
  } = req.body;
  const { id } = req.params;
  if (isadmin) {
    const updatedbook = await book.findByIdAndUpdate(
      id,
      {
        bookcountavailable: bookcountavailable,
        categories: categories,
        bookstatus: bookstatus,
        author: author,
        publisher: publisher,
        bookname: bookname,
        transactions: transactions,
        alternatetitle: alternatetitle,
        language: language,
      },
      { new: true }
    );
    res.json(updatedbook);
  } else {
    //		 return res.status(403).json("You dont have permission to delete a book!");
    return res.status(403).json("You dont have permission to delete a book!");
  }
};
