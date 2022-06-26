const customErrorHandler = (err, req, res, next) => {
  console.log("Custom error handling");
  res.status(400).json({
    success: false,
  });
};

module.exports = customErrorHandler;
