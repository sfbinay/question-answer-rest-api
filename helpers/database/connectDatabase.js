const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDb Connection Succesful");
    })
    .catch((err) => {
      console.error("MongoDb Conneciton Error", err);
    });
};

module.exports = connectDatabase;
