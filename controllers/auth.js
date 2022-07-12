const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  const token = user.generateJwtFromUser();
  console.log("token", token);
  res.status(200).json({
    success: true,
    data: user,
  });
});

const errorTest = (req, res, next) => {
  return next(TypeError("Type Error"));
};

module.exports = { register, errorTest };
