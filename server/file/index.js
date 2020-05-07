const { loadJsonFile } = require('./loadJsonFile');

function setupFileRouting(app, prefix = '') {
  app.get(`${prefix}/file`, async (req, res, next) => {
    try {
      const { fileLink } = req.query;
      const json = await loadJsonFile(fileLink);
      res.json(json);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = {
  loadJsonFile,
  setupFileRouting,
};
