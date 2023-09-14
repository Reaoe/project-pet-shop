const express = require("express");
const productController = require("../Controller/productController");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const Router = express.Router();

Router.route("/")
  .get(productController.getAllProduct)
  .post(upload.single("image"), productController.createProduct);

Router.route("/:id")
  .get(productController.getOneProduct)
  .patch(upload.single("image"), productController.updateOneProduct)
  .delete(productController.deleteOneProuduct);
module.exports = Router;
