const socketIo = require('socket.io');
const { addMessage } = require('../db/queries');

const io = socketIo();
const socketApi = {};

socketApi.io = io;

// const currentConnections = {};

const clientSentMsg = async (socket, data) => {
  const { channel } = data;
  const addedMessage = await addMessage(data);
  console.log('sending this thing', addedMessage[0]);
  socket.broadcast.to(channel).emit('serverSentMsg', addedMessage[0]);
};

require('socketio-auth')(io, {
  authenticate(socket, data, callback) {
    const { username, channel } = data;
    const { id } = socket;
    // currentConnections[username] = {
    //   socketId: id,
    // };
    console.log(`USER ${username} CONNECTED - JOINING CHANNEL: ${channel} - ${Date.now()}`);
    socket.join(channel);
    return callback(null, true);
  },
  disconnect(socket) {
    // delete currentConnections[socket.client.user];
    console.log(`USER ${socket.client.user} DISCONNECTED - LEAVING CHANNEL : ${socket.client.channel} - ${Date.now()}`);
  },
  postAuthenticate(socket, data) {
    const { username, channel } = data;
    socket.client.user = username;
    socket.client.channnel = channel;
    socket.on('clientSentMsg', msgData => clientSentMsg(socket, msgData));
  },
});

module.exports = socketApi;
