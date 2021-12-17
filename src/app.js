const express       = require('express');
const { setEnv }    = require('./config');
const {
  requestLogger,
  errorHandler
}                   = require('./middlewares');
const usersRouter   = require('./routes/users');

setEnv();

const app           = express();

app.use(express.json());
app.use(requestLogger);

app.use('/users', usersRouter);

app.all('*', (req, _) => {
  throw new Error(`The path (${req.originalUrl}) is not defined on the server.`);
});

app.use(errorHandler);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is listening on port: ${process.env.APP_PORT}`);
});