const bookcategory = require('../models/bookcategoryModel');


exports.addbookcat = async(req, res, next) => {
const {book, categoryname} = req.body;
let createdbookcategory;
createdbookcategory = await bookcategory.create({
book, 
categoryname, 
});
res.json(createdbookcategory);



}

exports.getcategory = async(req, res, next) => {
let var_bookcategory_List;
 var_bookcategory_List = await bookcategory.find({ },'book categoryname ');
res.json(var_bookcategory_List);



}




