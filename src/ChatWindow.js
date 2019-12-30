import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import PropTypes from 'prop-types';


class ChatWindow extends Component {

    sendMessage = (message)=>{
        this.props.sendMessage(this.props.user.username, message)
    }
    
    render() {
        const { messages, user } = this.props;

        return (<div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MessageList user={user} messages={messages}/>
            <SendMessage sendMessage={this.sendMessage}/>
        </div>)
    }
}

ChatWindow.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
  };

export default ChatWindow

