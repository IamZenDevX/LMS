const User = require("../models/UserModel");
const jwt =require("jsonwebtoken")

exports.register = async (req, res, next) => {
  const {
    address,
    admissionId,
    age,
    dob,
    email,
    employeeId,
    gender,
    isadmin,
    mobilenumber,
    password,
    points,
    userfullname,
    usertype,
  } = req.body;
  let createdUser;
  createdUser = await User.create({
    address,
    password,
    usertype,
    points,
    admissionId,
    employeeId,
    dob,
    mobilenumber,
    userfullname,
    email,
    gender,
    age,
    isadmin,
  });
  res.json(createdUser);
};

exports.signin = async (req, res, next) => {
  const { email, password, mobilenumber } = req.body;
  const secrect_key="thisisscsbdvchjbdre"
  if (!email) {
    res.send("First you need to register");
  } else {
  }
  let payload = {
    email,
    password,
  };
  let var_User_List;
  var_User_List = await User.findOne(
    {
      email,
    },
    "email password mobilenumber "
  );
  if (email == var_User_List.email) {
    if (var_User_List.password == password) {
        let token;
        token = jwt.sign(payload,secrect_key, { expiresIn: "5h" });
        res.json({ message: "Login", token: token });
      } else {
      }
  } else {
  }
  
};
