const express = require("express");
const authController = require("../Controller/authController");
const userController = require("../Controller/userController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const Router = express.Router();

Router.post("/signup", authController.signup);
Router.post("/login", authController.login);

Router.route("/:id")
  .get(userController.getOneUser)
  .patch(upload.single("image"), userController.updateInformationUser)
  .delete(userController.deleteUser);
Router.patch("/update-role/:id", authController.updateRole);
Router.get("/", userController.getAllUser);
module.exports = Router;
