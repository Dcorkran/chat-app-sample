import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LoginButtonsContainer from './components/login-buttons-container';

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

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          {
            !this.state.userName ? 
            <LoginButtonsContainer handleLogin={this.handleLogin} /> :
            <div>TODO</div>
          }
        </Container>
      </React.Fragment>
    );
  }
}
export default App;