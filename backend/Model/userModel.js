const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Xin vui long dien ten cua ban!"],
  },
  lastName: {
    type: String,
    required: [true, "Xin vui long dien ten cua ban!"],
  },
  email: {
    type: String,
    required: [true, "Xin vui long dien dia chi email cua ban"],
    // unique: true,
    lowercase: true,
    //  validate: [validator.isEmail, 'Please provide a valid email']
  },
  phone: {
    type: String,

    // unique: true,
    //  validate: [validator.isEmail, 'Please provide a valid email']
  },
  address: {
    city: {
      type: String,
    },
    district: {
      type: String,
    },
    ward: {
      type: String,
    },
  },
  role: {
    type: String,
    enum: ["user", "staff", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [false, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  // passwordResetToken: String,
  // passwordResetExpires: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
