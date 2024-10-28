const ErrorHandler = require('../utils/default/errorHandler');
const User = require('../models/UserModel');


exports.adduser = async(req, res, next) => {
const {address, admissionId, age, dob, email, employeeId, gender, isadmin, mobilenumber, password, points, userfullname, usertype} = req.body;
let createdUser;
createdUser = await User.create({
points, 
userfullname, 
email, 
gender, 
address, 
employeeId, 
isadmin, 
mobilenumber, 
admissionId, 
usertype, 
password, 
age, 
dob, 
});
res.json(createdUser);



}

exports.deleteuser = async(req, res, next) => {
const {id} = req.params;
const deletedUser = await User.findByIdAndDelete(id);
//		res
res.send("Data Deleted!!");




}

exports.getuser = async(req, res, next) => {
const {id} = req.params;
let var_User_List;
try {
 var_User_List = await User.findById(id,'userfullname employeeId address dob isadmin gender usertype points password admissionId mobilenumber age email ');
} catch (err) {
const error = new ErrorHandler(
'Error while fetching data',
400
);
return next(error);
}
res.json(var_User_List);



}

exports.updateuser = async(req, res, next) => {
const {address, admissionId, age, dob, email, employeeId, gender, mobilenumber, password, points, userfullname, usertype} = req.body;
const {id} = req.params;
const updatedUser = await User.findByIdAndUpdate(id,
{
mobilenumber: mobilenumber,
address: address,
userfullname: userfullname,
employeeId: employeeId,
gender: gender,
email: email,
age: age,
points: points,
usertype: usertype,
password: password,
admissionId: admissionId,
dob: dob
}
, {new: true} );
res.json(updatedUser);



}




