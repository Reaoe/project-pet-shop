const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Ten san pham khong duoc de trong"],
    unique: true,
    trim: true,
    maxlength: [100, "ten san pham nho hon 100 ky tu"],
    minlength: [2, "ten san pham lon hon 10 ky tu"],
  },
  productCreater: {
    type: String,
    //type: mongoose.Schema.ObjectId,
    required: [true, "Ten san pham khong duoc de trong"],
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "khong duoc de trong loai"],
  },
  price: {
    type: Number,
    required: [true, "khong duoc de trong so tien"],
  },
  stockQuantity: {
    type: Number,
    required: [true, "Khong duoc de trong so luong"],
  },
  image: {
    type: String,
    required: [true, "khong duoc de trong anh"],
    default: "default.png",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
