const fetch = require('node-fetch');

async function loadJsonFile(fileLink) {
  const result = await fetch(fileLink);
  const text = await result.text();
  const json = JSON.parse(text);
  return json;
}

module.exports = {
  loadJsonFile,
};
