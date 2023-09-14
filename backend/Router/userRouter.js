const express = require("express");
const authController = require("../Controller/authController");
const userController = require("../Controller/userController");
const Router = express.Router();

Router.post("/signup", authController.signup);
Router.post("/login", authController.login);

Router.route("/").post(userController.createInformationCustomer);

module.exports = Router;
