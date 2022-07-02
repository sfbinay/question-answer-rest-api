const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const register = async (req, res, next) => {
  //data
  const name = "Test test";
  const email = "testom";
  const password = "123456";

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return next(err);
  }
};

const errorTest = (req, res, next) => {
  return next(TypeError("Type Error"));
};

module.exports = { register, errorTest };
