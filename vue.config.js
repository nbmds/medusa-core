const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  // sourceMap: false,
  pages: {
    index: {
      entry: "examples/main.ts",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: config => {
    config.module
      .rule("tslint")
      .test(/\.ts$/)
      .use("tslint-loader")
      .loader("tslint-loader")
      .end();
    config.resolve.alias.set("@", resolve("core/"));
    config.plugin("fork-ts-checker").tap(([options]) => {
      return [
        {
          async: false,
          tslint: true,
          vue: true,
          formatter: "codeframe",
        },
      ];
    });
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
};
