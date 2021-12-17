const Joi = require('joi');

const updateUserSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  
  passwordConfirm: Joi.ref('password')
})
  .with('password', 'passwordConfirm');

module.exports = updateUserSchema;