const npmFetch = require('npm-registry-fetch');

function loadDependencyInfo(dependencyName) {
  return npmFetch.json(dependencyName);
}

module.exports = {
  loadDependencyInfo,
};
