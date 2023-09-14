const User = require("../Model/userModel");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/appError");

// tao tai khoang User
exports.signup = catchAsync(async (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;
  //   console.log(req.body);

  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).json({
    status: "Success",
    data: {
      data: newUser,
    },
  });
});

// dang nhap tai khoang
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // kiem tra email va password da duoc nhap chua
  if (!email || !password) {
    return next(new AppError("Khong duoc de trong email hoac password", 401));
  }

  // kiem tra tai khoan User da ton tai chua
  const user = await User.findOne({ email }).select("+password");

  if (!user || password != user.password) {
    return next(new AppError("Email hoac password khong chinh xac", 402));
  }
  res.status(200).json({
    status: "Success",
    data: {
      user,
    },
  });
});
