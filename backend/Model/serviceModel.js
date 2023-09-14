const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, "Ten pet khong duoc de trong"],
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "khong duoc de trong so tien"],
  },
});

const Service = mongoose.model("Service", petSchema);

module.exports = Service;
