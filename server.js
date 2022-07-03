const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

// Environment Variables
dotenv.config({
  path: "./config/env/config.env",
});

// MongoDb Connection
connectDatabase();

const app = express();
const PORT = process.env.PORT;
const environment = process.env.NODE_ENV;

// Express - Body Middleware
app.use(express.json());

// Routers Middleware
app.use("/api", routers);

// Error Handling
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`App Started on ${PORT} : ${environment}`);
});
