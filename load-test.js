import http from "k6/http";
import { check } from "k6";
import ws from "k6/ws";

export const options = {
  stages: [
    { duration: "1m", target: 10000 }, // Ramp-up to 10,000 users
    { duration: "3m", target: 10000 }, // Maintain 10,000 users for 3 minutes
    { duration: "1m", target: 0 }, // Ramp-down
  ],
};

export default function loadTest() {
  const url = "ws://localhost:3000/api/socket";
  const params = { tags: { my_tag: "hello" } };

  const res = ws.connect(url, params, function (socket) {
    socket.on("open", () => {
      console.log("Connected");
      socket.send(JSON.stringify({ message: "Hello World" }));
    });

    socket.on("message", (msg) => {
      console.log("Received message: " + msg);
    });

    socket.on("close", () => console.log("Disconnected"));
  });

  check(res, { "Connected successfully": (r) => r && r.status === 101 });
}
