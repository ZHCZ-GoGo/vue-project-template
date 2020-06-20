const env = process.env.NODE_ENV;

let config = null;

if (env === "development") {
  console.log("development 开发环境");
  config = require("./env/development");
} else if (env === "production") {
  console.log("production 生产环境");
  config = require("./env/production");

  console.log(config);
} else {
  console.log("test");
}
console.log("--- build go ---");

module.exports = config;
