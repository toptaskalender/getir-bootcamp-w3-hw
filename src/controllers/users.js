const db              = require('../database/database');
const { userService } = require('../services');
const { catchAsync }  = require('../utils');

const getUsers = catchAsync(async (_, res) => {
  const users = db;

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

const getUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  const user = userService.findById(id);

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

const createUser = catchAsync(async (req, res) => {
  const { data } = req;
  
  const user = userService.save(data);
  
  res.status(201).json({
    status: 'success',
    data: {
      user
    }
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { id }            = req.params;
  const { data, method }  = req;

  let user;

  if (method === 'PATCH') user = userService.findByIdAndPatch(id, data)
  else user = userService.findByIdAndPut(id, data)
  
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  userService.deleteById(id);

  res.status(204).json({
    status: 'success',
    data: null
  });
});

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}