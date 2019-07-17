import React, { Component } from "react";
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LoginButtonsContainer from './components/login-buttons-container';
import Chat from './components/chat';
import ChatChannelForm from './components/chat-channel-form';
import StyledButton from './components/styled-button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      channelId: null,
      username: null
    };
  }

  handleUserSelect = (username) => {
    this.setState({username});
  }

  handleChannelSubmit = (channelId) => {
    this.setState({channelId});
  }
  
  handleReset = () => {
    this.setState({
      channelId: null,
      username: null
    })
  }

  render() {
    const { channelId, username } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          { !this.state.username && <LoginButtonsContainer handleUserSelect={this.handleUserSelect} /> }
          { this.state.username && !this.state.channelId && <ChatChannelForm handleChannelSubmit={this.handleChannelSubmit}/>}
          { this.state.channelId && <Chat channelId={channelId} username={username}/>}
          <StyledButton handleClick={this.handleReset} color='default' text='RESET'></StyledButton>
        </Container>
      </React.Fragment>
    );
  }
}
export default App;