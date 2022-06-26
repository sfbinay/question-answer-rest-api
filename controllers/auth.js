const User = require("../models/User");

const register = async (req, res, next) => {
  //data
  const name = "Ali Veli";
  const email = "aliveli@mail.com";
  const password = "12345";

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
  return next(new Error("Bir Hata Oluştu"));
};

module.exports = { register, errorTest };
