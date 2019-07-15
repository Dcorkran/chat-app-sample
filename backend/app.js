const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

const currentConnections = {};

require('socketio-auth')(io, {
  authenticate(socket, data, callback) {
    const { username, password } = data;
    const { id } = socket;
    console.log(id);
    console.log(`welcome ${username}`);
    currentConnections[username] = {
      socketId: id,
    };
    return callback(null, true);
  },
  disconnect(socket) {
    delete currentConnections[socket.client.user];
    console.log(`${socket.client.user} disconnected`);
  },
  postAuthenticate(socket, data) {
    const { username } = data;
    socket.client.user = username;
  },
});

server.listen(port, () => console.log(`Listening on port ${port}`));
