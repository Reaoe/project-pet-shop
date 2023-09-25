const User = require("../Model/userModel");
const catchAsync = require("../Utils/catchAsync");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const AppError = require("../Utils/appError");

// tao tai khoang User
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
  });
  const token = signToken(newUser._id);
  res.status(201).json({
    status: "Success",

    data: {
      newUser,
      token: token,
    },
  });
});

// dang nhap tai khoang
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // kiem tra email va password da duoc nhap chua
  if (!email || !password) {
    return next(new AppError("Khong duoc de trong email hoac password", 400));
  }

  // kiem tra tai khoan User da ton tai chua
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Email hoac password khong chinh xac", 401));
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: "Success",
    data: {
      user,
      token: token,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  // Lấy token và kiểm tra xem nó có đúng là token đã được tạo không
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("Bạn chưa đăng nhập", 401));
  }

  // Xác thực Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);
  //Kiểm tra xem user có tồn tại không
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError(
        "Khong co user cos id nay ton tai sau khi giai ma Token",
        401
      )
    );
  }
  next();
});
