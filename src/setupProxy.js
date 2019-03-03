const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "https://api.lightrank.com" }));
  app.use(proxy("/graphql", { target: "https://api.lightrank.com" }));
};
