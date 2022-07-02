// const CustomError = require("../../helpers/error/CustomError");

const customErrorHandler = (err, req, res, next) => {
  // let customError = err;

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = customErrorHandler;
