const jwt             = require('jsonwebtoken');
const { userService } = require('../services');
const { 
  AppError,
  catchAsync
}                     = require('../utils');

const signUp = catchAsync(async (req, res) => {
  const { data }  = req;
  const user      = userService.save(data);

  const JWT       = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  
  res.status(201).json({
    status: 'success',
    token: JWT,
    data: {
      user
    }
  });
});

const logIn = catchAsync(async (req, res, next) => {
  const {
    email,
    password
  }               = req.data;
  const user      = userService.findByEmail(email);
  
  if (!user || !(user.password === password)) return next(new AppError('Invalid email or password.', 400));

  const JWT = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  res.status(200).json({
    status: 'success',
    token: JWT,
    data: {
      user
    }
  });
});

module.exports = {
  signUp,
  logIn
}