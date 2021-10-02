import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("database/db.json");
const middlewares = defaults({ static: "./build" });
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);