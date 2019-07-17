const socketIo = require('socket.io');
const { addMessage } = require('../db/queries');

const io = socketIo();
const socketApi = {};

socketApi.io = io;

const clientSentMsg = async (socket, data) => {
  const { channel } = data;
  const addedMessage = await addMessage(data);
  socket.broadcast.to(channel).emit('serverSentMsg', addedMessage[0]);
};

require('socketio-auth')(io, {
  authenticate(socket, data, callback) {
    const { username, channel } = data;
    console.log(`USER ${username} CONNECTED - JOINING CHANNEL: ${channel} - TIME: ${Date.now()}`);
    socket.join(channel);
    return callback(null, true);
  },
  disconnect(socket) {
    console.log(`USER ${socket.client.user} DISCONNECTED - TIME: ${Date.now()}`);
  },
  postAuthenticate(socket, data) {
    const { username, channel } = data;
    socket.client.user = username;
    socket.client.channnel = channel;
    socket.on('clientSentMsg', msgData => clientSentMsg(socket, msgData));
  },
});

module.exports = socketApi;
