const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: [true, "Ten pet khong duoc de trong"],
  },
  customerName: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Ten khach hang khong duoc de trong"],
  },
  species: {
    type: String,
    required: [true, "Ten loai thu cung khong duoc de trong"],
  },
  breed: {
    type: String,
    required: [true, "Ten goi khoa hoc khong  duoc de trong loai"],
  },
  age: {
    type: Number,
    required: [true, "Tuoi cua thu cung khong duoc de trong"],
  },
  gender: {
    type: String,
    required: [true, "Giong loai khong duoc de trong"],
  },
  img: {
    type: String,
    required: [true, "khong duoc de trong anh"],
  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
