
const express = require("express");
const categoryController = require("../Controller/categoryController");
const authController = require("../Controller/authController");
const Router = express.Router();

Router.use(authController.protect);

Router.use(authController.restrictTo("admin"));

Router.route("/").post(categoryController.createCategory);
Router.get("/parent-category", categoryController.getParentCategory);
Router.get("/child-category", categoryController.getChildCategory);
Router.route("/:id")


  .get(categoryController.getOneCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);
module.exports = Router;
