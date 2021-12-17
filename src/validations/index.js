const signUpSchema      = require('./sign-up');
const logInSchema       = require('./log-in');
const createUserSchema  = require('./create-user');
const updateUserSchema  = require('./update-user');

module.exports = {
  signUpSchema,
  logInSchema,
  createUserSchema,
  updateUserSchema
};