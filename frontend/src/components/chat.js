import React, { Component } from 'react';
import axios from 'axios';
import ChatMessageContainer from './chat-message-container';
import ChatMessageForm from './chat-message-form';
import socketIOClient from "socket.io-client";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messages: null,
      socket: null
    };
  }

  fetchData = async (channelId) => {
    const result = await axios(`http://localhost:4001/messages/${channelId}`);
    this.setState({messages: result.data.messages});
  }

  handleServerSentMsg = (message) => {
    const updatedMessages = [...this.state.messages, message]
    this.setState({messages: updatedMessages});
  }

  handleMessageSubmit = (msg) => {
    const { username, channelId } = this.props
    this.state.socket.emit('clientSentMsg', {username, msg, channel: channelId});
    const updatedMessages = [...this.state.messages, {msg, sent_from: username}];
    this.setState({messages: updatedMessages});
  }

  componentDidMount() {
    const { username, channelId } = this.props;
    this.fetchData(channelId);
    const socket = socketIOClient("http://localhost:4001");
    socket.on('connect', () => {
      socket.emit('authentication', {username, channel: channelId});
    });
    socket.on('serverSentMsg', this.handleServerSentMsg);
    this.setState({socket});
  }

  componentWillUnmount() {
    this.state.socket.disconnect();
  }

  render() {
    const { messages } = this.state; 
    return (
      <div>
        <ChatMessageContainer messages={messages}/>
        <ChatMessageForm handleMessageSubmit={this.handleMessageSubmit}/>
      </div>
    );
  }
}
export default Chat;