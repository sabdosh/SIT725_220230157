const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const server = http.createServer(app);          // create http server from Express
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

let counts = { up: 0, down: 0 };

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  // sends the current totals to the new server
  socket.emit("poll:update", counts);

  // listen for votes from user
  socket.on("poll:vote", (voteType) => {
    if (!["up", "down"].includes(voteType)) return;

    counts[voteType] += 1;

    // shows the updated totals 
    io.emit("poll:update", counts);
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server is running at http://localhost:3000");
});
