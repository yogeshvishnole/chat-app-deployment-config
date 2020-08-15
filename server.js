const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3000;

// Creating a server
const server = app.listen(port, () =>
  console.log(`App is running on the port ${port}`)
);

// Connection to server
const io = socket(server);

// Setting up connection to client
io.on("connection", socket => {
  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", data => {
    socket.broadcast.emit("typing", data);
  });
});
