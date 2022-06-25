const express = require("express");
const dotenv = require("dotenv");

// Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

const app = express();

const PORT = process.env.PORT;
const environment = process.env.NODE_ENV;

app.get("/", (req, res) => {
  res.send("Hello Question Answer Api");
});

app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${environment}`);
});
