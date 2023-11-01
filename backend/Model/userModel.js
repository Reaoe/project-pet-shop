const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [false, 'Xin vui long dien ten cua ban!'],
  },
  lastName: {
    type: String,
    required: [false, 'Xin vui long dien ten cua ban!'],
  },
  email: {
    type: String,
    required: [true, 'Xin vui long dien dia chi email cua ban'],
    unique: true,
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
    enum: ['user', 'staff', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [false, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  image: {
    type: String,
    //required: [true, "khong duoc de trong anh"],
    // default: "default.png",
  },
});

userSchema.pre('save', async function (next) {
  // Dòng này kiểm tra xem trường password của tài liệu đã được thay đổi hay chưa
  if (!this.isModified('password')) {
    return next();
  }
  // Mã hóa passworld
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  usePassword
) {
  return await bcrypt.compare(candidatePassword, usePassword);
};

userSchema.pre('save', async function (next) {
  const user = this;

  const existingUser = await User.findOne({ email: user.email });
  if (existingUser) {
    return next(new AppError('Email đã tồn tại!!', 404));
  }

  next();
});
const User = mongoose.model('User', userSchema);

module.exports = User;
