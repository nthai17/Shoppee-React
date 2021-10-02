const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/database/db.json");
const middlewares = jsonServer.defaults({ static: "./build" });
const port = process.env.PORT;

server.use(middlewares);
server.use(router);

server.listen(port);