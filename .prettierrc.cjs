// Prettier configuration with prettier-plugin-sort-json enabled
// This will sort JSON object keys recursively wherever Prettier formats JSON files.
module.exports = {
  plugins: ["prettier-plugin-sort-json"],
  jsonRecursiveSort: true,
  // Default jsonSortOrder is lexical for all keys, you can customize this
  // jsonSortOrder: '{"*": "lexical"}'
};
