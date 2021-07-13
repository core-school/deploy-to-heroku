import { Server } from "socket.io";
import http from "http";

export const start_websockets = (server: http.Server) => {
  const io = new Server(server, { cors: { origin: true } });

  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    socket.emit("chat", { type: "server", message: "HELLO FROM SERVER" });

    socket.on("chat", (msg) => {
      console.log("RECEIVED MESSAGE");
      console.log(msg);
      socket.broadcast.emit("chat", {
        type: "server",
        message: `🦜 ${msg.message}`,
      });
    });
  });
};
