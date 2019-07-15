import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LoginButtonsContainer from './components/login-buttons-container';
import Chat from './components/chat'

class App extends Component {
  constructor() {
    super();
    this.state = {
      socket: null,
      userName: null
    };
  }
  handleLogin = (userName) => {
    const socket = socketIOClient("http://127.0.0.1:4001");
    socket.on('connect', () => {
      socket.emit('authentication', {username: userName, password: "secret"});
      socket.on('authenticated', () => {
        this.setState({socket, userName})
      });
    });
  }
  handleMessageSubmit = (val) => (event) => {
    const { socket, userName } = this.state
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          {
            !this.state.userName ? 
            <LoginButtonsContainer handleLogin={this.handleLogin} /> :
            <Chat handleMessageSubmit={this.handleMessageSubmit}/>
          }
        </Container>
      </React.Fragment>
    );
  }
}
export default App;