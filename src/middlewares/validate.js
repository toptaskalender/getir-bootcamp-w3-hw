const { AppError } = require('../utils');

function validate(schema, source) {
  return (req, _, next) => {
    const data              = req[source];
    const { error, value }  = schema.validate(data);

    if (error) {
      const errMsg = `${error.details.map(err => err.message).join(', ')}.`;
      return next(new AppError(errMsg, 400));
    }

    req.data = value;

    next();
  }
}

module.exports = validate;