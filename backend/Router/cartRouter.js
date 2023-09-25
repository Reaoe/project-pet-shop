const express = require("express");
const categoryController = require("../Controller/cartController");
const Router = express.Router();

Router.route("/")
  .post(categoryController.createCart)
  .get(categoryController.getAllCart);
module.exports = Router;
