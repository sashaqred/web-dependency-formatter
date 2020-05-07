const { loadDependencyInfo } = require('./loadDependency');

function setupNpmRouting(app, prefix = '') {
  app.get(`${prefix}/npm/*`, async (req, res, next) => {
    try {
      const { 0: package } = req.params;
      const result = await loadDependencyInfo(package);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = {
  loadDependencyInfo,
  setupNpmRouting,
};
