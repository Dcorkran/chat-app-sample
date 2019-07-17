const express = require('express');
const cors = require('cors');
const http = require('http');
const socketApi = require('./utils/socketApi');
const messages = require('./routes/messages');

const { io } = socketApi;
const port = process.env.PORT || 4001;
const index = require('./routes/messages');

const app = express();
app.use(cors());
app.use('/messages', messages);
const server = http.createServer(app);
io.attach(server);

server.listen(port, () => console.log(`Listening on port ${port}`));
