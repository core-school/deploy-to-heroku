import { PORT } from "./config";
import http from "http";
import { app } from "./app";
import { start_websockets } from "./io";

const server = http.createServer(app);
start_websockets(server);


console.log(process.env)

server.listen(PORT, () => console.log(`Ready on http://localhost:${PORT}`));
