const jwt             = require('jsonwebtoken');
const { promisify }   = require('util');
const { 
  AppError,
}                     = require('../utils');
const { userService } = require('../services');

async function verifyAuth(req, _, next) {
  try {
    const { authorization } = req.headers;
  
    if (
      !authorization ||
      !(authorization.split(' ')[0] === 'Bearer') ||
      !authorization.split(' ')[1]
    ) {
      return next(new AppError('Unauthorized request. Please log in.', 401));
    }
  
    const token   = authorization.split(' ')[1];
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    const user    = userService.findById(decoded.id);
  
    if(!user) {
      return next(new AppError('The user belonging to this token is no longer existent.', 401));
    }
  
    req.user = user;
    next();
  } catch (err) {
    next(new AppError('JWT malformed.', 400));
  }
}

module.exports = verifyAuth;