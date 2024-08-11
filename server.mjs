// Copied implementation from:
// https://socket.io/how-to/use-with-nextjs

import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);
  const connectedClients = new Set();

  io.on("connection", (socket) => {
    connectedClients.add(socket.id);

    // Set current online users
    io.emit("connected-clients", connectedClients.size);

    // ...
    socket.on("message", (msg) => {
      // send received message and response
      console.log(msg);
      socket.broadcast.emit("chat-message", msg);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
      connectedClients.delete(socket.id);
      io.emit("connected-clients", connectedClients.size);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
