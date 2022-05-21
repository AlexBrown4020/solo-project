module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      // "/api": {
      //   target: "http://localhost:9000",
      //   secure: false,
      // },
      "/": { target: "http://127.0.0.1:9000" },
    },
  },
};