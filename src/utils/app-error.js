class AppError extends Error {
  constructor(msg, statusCode) {
    super();

    this.message        = msg;
    this.statusCode     = statusCode;
    this.status         = String(statusCode).startsWith('4') ? 'fail' : 'error';
    this.isOperational  = true;
  }
}

module.exports = AppError;