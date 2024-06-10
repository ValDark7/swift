// api/products.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("../public/data.json"); // Укажите путь к вашему файлу db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server(req, res);
};
