const express = require("express");
const productController = require("../Controller/productController");
const authController = require("../Controller/authController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const Router = express.Router();
//authController.protect,
Router.route("/")
  .get(productController.getAllProduct)
  .post(upload.single("image"), productController.createProduct);

Router.route("/:id")
  .get(productController.getOneProduct)
  .patch(upload.single("image"), productController.updateOneProduct)
  .delete(productController.deleteOneProuduct);
module.exports = Router;
