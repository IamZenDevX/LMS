const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  usertype: {
    type: String,
  },
  userfullname: {
    type: String,
  },
  admissionId: {
    type: String,
    minLength: 3,
    maxLength: 15,
  },
  employeeId: {
    type: String,
    minLength: 3,
    maxLength: 15,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
  },
  isadmin: {
    type: Boolean,
  },
  address: {
    type: String,
  },
  mobilenumber: {
    type: Number,
  },
  email: {
    type: String,
    maxLength: 50,
  },
  password: {
    type: String,
  },
  points: {
    type: Number,
  },
});

module.exports = mongoose.model("User", UserSchema);
