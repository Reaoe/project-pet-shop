const express = require("express");
const cartController = require("../Controller/orderController");
const Router = express.Router();

Router.route("/")
  .post(cartController.createOrder)
  .get(cartController.getAllOrder);
module.exports = Router;
