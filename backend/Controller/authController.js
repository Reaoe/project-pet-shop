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
//Middleware chặn đường dẫn
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
  //Kiểm tra xem user có tồn tại không
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("Khong co user co id nay ton tai sau khi giai ma Token", 401)
    );
  }
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.restrictTo = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return next(
        new AppError("Bạn không có quyền thực hiện hành động này", 403)
      );
    }
    next();
  };
};

exports.updateRole = catchAsync(async (req, res, next) => {
  const newRole = await User.findByIdAndUpdate(
    req.params.id,
    {
      role: req.body.role,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!newRole) {
    return next(new AppError("Không có id này để update", 404));
  }

  res.status(201).json({
    status: "Sucess",
    data: {
      newRole,
    },
  });
});
