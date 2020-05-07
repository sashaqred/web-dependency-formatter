const cors = require('cors');
const express = require('express');
const { setupNpmRouting } = require('./npm');
const { setupFileRouting } = require('./file');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

setupNpmRouting(app, '/api');
setupFileRouting(app, '/api');

app.use((req, res, next) => {
  const error = new Error('404 Not Found');
  error.statusCode = 404;
  next(error);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).json({
    statusCode,
    message,
  });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening at ${port}`));
