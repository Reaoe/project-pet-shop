class AppError extends Error {
  constructor(mesaage, statusCode) {
    super(mesaage);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "Fail" : "Error";
    // xử lý lỗi có tính chất hoạt động
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
