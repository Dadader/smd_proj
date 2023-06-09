const express = require("express");
const app = express();

// app.use(express.json({limit: '50mb'}));

const users = require("./router/products/productCategory");
app.use("/products", users);

module.exports = app;