const express = require("express");
const categoryController = require("../Controller/categoryController");
const Router = express.Router();

Router.route("/").post(categoryController.createCategory);
Router.get("/parent-category", categoryController.getParentCategory);
Router.get("/child-category", categoryController.getChildCategory);
Router.route("/:id")
  .get(categoryController.getOneCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);
module.exports = Router;
