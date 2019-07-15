import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {
    const socket = socketIOClient("http://127.0.0.1:4001");
    socket.on('connect', function(){
      socket.emit('authentication', {username: "John", password: "secret"});
      socket.on('authenticated', function() {
        
      });
    });
  }
  render() {
    return (
        <div style={{ textAlign: "center" }}>
          TODO
        </div>
    );
  }
}
export default App;