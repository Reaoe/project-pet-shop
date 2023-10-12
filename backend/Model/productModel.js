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
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "khong duoc de trong danh muc"],
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
  description: {
    type: String,
    default: null,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
