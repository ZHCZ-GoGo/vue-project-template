// 生产环境配置

const merge = require("lodash/merge"),
  common = require("./common"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  CompressionWebpackPlugin = require("compression-webpack-plugin"),
  productionGzipExtensions = ["js", "css"],
  production = {
    configureWebpack: (config) => {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp(`\\.(${productionGzipExtensions.join("|")})$`),
          threshold: 10240,
          minRatio: 0.8,
        })
      );
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true, // console
              drop_console: true,
              pure_funcs: ["console.log"], // 移除console
            },
          },
          sourceMap: false,
          parallel: true,
        })
      );
    },
  };

module.exports = merge(common, production);
