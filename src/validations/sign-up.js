const Joi = require('joi');

const signUpSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  passwordConfirm: Joi.ref('password'),
})
  .with('password', 'passwordConfirm');

module.exports = signUpSchema;