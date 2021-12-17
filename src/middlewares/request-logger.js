const fsPromises            = require('fs/promises');
const { printLoggingInfo }  = require('../utils');

function requestLogger(req, _, next) {
  const requestedAt = new Date().toISOString();
  const logMsg      = `${req.method} '${req.originalUrl}' HTTP${req.httpVersion} ${requestedAt}\n\n`;

  fsPromises.appendFile(`${__dirname}/../log.txt`, logMsg)
    .then(printLoggingInfo)
    .catch(printLoggingInfo)

  next();
}

module.exports = requestLogger;