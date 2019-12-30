import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: []
  }

  sendMessage = (username, message) => {
    const newMessage = {
      ['username']: username,
      ['text']: message,
    };
    this.setState(previousState => ({
      messages: previousState.messages.concat([newMessage]),
    }))
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => <ChatWindow user={user} messages={messages} sendMessage={this.sendMessage} />)}
        </div>
      </div>
    );
  }
}

export default App;
