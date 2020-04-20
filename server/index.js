const cors = require('cors');
const express = require('express');
const npmFetch = require('npm-registry-fetch');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/api/npm/*', async (req, res, next) => {
  // TODO #16 Improve error handling after 404
  try {
    const package = req.params[0];
    const result = await npmFetch.json(package);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.use((req, res) => {
  res.status(404).send();
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send();
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening at ${port}`));
