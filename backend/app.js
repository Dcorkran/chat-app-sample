const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const socketApi = require('./utils/socketApi');

const { io } = socketApi;
const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(cors());
app.use(index);
const server = http.createServer(app);
io.attach(server);

server.listen(port, () => console.log(`Listening on port ${port}`));
