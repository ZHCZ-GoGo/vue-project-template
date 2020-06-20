// 开发环境配置

const merge = require("lodash/merge"),
  common = require("./common"),
  development = {
    devServer: {
      host: "0.0.0.0",
    },
  };

module.exports = merge(common, development);
