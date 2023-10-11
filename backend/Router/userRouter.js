const express = require("express");
const authController = require("../Controller/authController");
const userController = require("../Controller/userController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const Router = express.Router();

Router.post("/signup", authController.signup);
Router.post("/login", authController.login);

Router.use(authController.protect);

Router.route("/:id")
  .get(userController.getOneUser)
  .patch(
    authController.restrictTo("user"),
    upload.single("image"),
    userController.updateInformationUser
  )
  .delete(authController.restrictTo("admin"), userController.deleteUser);
Router.patch(
  "/update-role/:id",
  authController.restrictTo("admin"),
  authController.updateRole
);
Router.use(authController.restrictTo("admin"));
Router.get("/", userController.getAllUser);
module.exports = Router;
