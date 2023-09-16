const express = require('express');

const categoryController = require('../Controller/categoryController');

const Router = express.Router();

Router.route('/')
  .post(categoryController.createCategory)
  .get(categoryController.getAllCategory);
Router.route("/categoryType")
  .post(categoryController.createCategoryType)
  .get(categoryController.getAllCategoryType);

Router.route('/:id')
  .get(categoryController.getOneCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);
module.exports = Router;
