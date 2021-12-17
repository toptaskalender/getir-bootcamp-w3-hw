const router  = require('express').Router();

const {
  verifyAuth,
  validate
}             = require('../middlewares');

const {
  signUp,
  logIn
}             = require('../controllers/auth');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}             = require('../controllers/users');

const {
  signUpSchema,
  logInSchema,
  createUserSchema,
  updateUserSchema
}             = require('../validations');

router.route('/sign-up')
  .post(validate(signUpSchema, 'body'), signUp)

router.route('/log-in')
  .post(validate(logInSchema, 'body'), logIn)

router.route('/')
  .get(verifyAuth, getUsers)
  .post(verifyAuth, validate(createUserSchema, 'body'), createUser)

router.route('/:id')
  .get(verifyAuth, getUser)
  .patch(verifyAuth, validate(updateUserSchema, 'body'), updateUser)
  .put(verifyAuth, validate(updateUserSchema, 'body'), updateUser)
  .delete(verifyAuth, deleteUser)

module.exports = router;