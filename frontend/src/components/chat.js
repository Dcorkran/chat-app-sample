import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ChatMessageContainer from './chat-message-container';
import ChatMessageForm from './chat-message-form';
import socketIOClient from "socket.io-client";


const useStyles = makeStyles(theme => ({
  container: {
    //TODO style
  }
}));

export default function Chat(props) {
  const classes = useStyles();
  const { channelId, username } = props;
  const [messages, setMessages] = useState([]);
  const [savedSocket, setSocket] = useState(null);
  
  const handleServerSentMsg = (message) => {
    messages.push(message);
    setMessages(messages);
  }

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`http://localhost:4001/messages?channel=${channelId}`);
      setMessages(result.data.messages);
    }
    fetchData();
  }, [props]);

  useEffect(() => {
    function handleLogin () {
      const socket = socketIOClient("http://127.0.0.1:4001");
      setSocket(socket)
      socket.on('connect', () => {
        socket.emit('authentication', {username, channel: channelId});
      });
    }
    if (!savedSocket) {
      handleLogin();
    } else {
    }
    // return function cleanup() {
    //   if (savedSocket) {
    //     savedSocket.disconnect()
    //   }
    // };
  }, [savedSocket, messages]);


  const handleMessageSubmit = (msg) => {
    savedSocket.emit('clientSentMsg', {username, msg, channel: channelId});
  }

  if (savedSocket) {
    savedSocket.off('serverSentMsg')
    savedSocket.on('serverSentMsg', handleServerSentMsg)
  }
  
  console.log(messages)
  return (
    <div className={classes.container}>
      <ChatMessageContainer messages={messages}/>
      <ChatMessageForm handleMessageSubmit={handleMessageSubmit}/>
    </div>
  );
}