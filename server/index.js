const cors = require('cors');
const express = require('express');
const npmFetch = require('npm-registry-fetch');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/npm/*', async (req, res, next) => {
  try {
    const package = req.params[0];
    const result = await npmFetch.json(package);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

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
