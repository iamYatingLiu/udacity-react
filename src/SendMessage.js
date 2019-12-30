import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
    state = {
        message: ''
    }

    sendMessage = event => {
        event.preventDefault();
        this.props.sendMessage(this.state.message)
    }
    
    updateMessage = event => {
        const { value } = event.target;

        this.setState(() => ({
          message: value,
        }));
    }

    isDisabled = () => {
        const { message } = this.state;
        return message === '';
      };

    render() {
        const {message}= this.state;
        return (<div>
            <form className="input-group" onSubmit={this.sendMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.updateMessage} value={message}/>
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                  </button>
                </div>
            </form>
        </div>)
    }
}


SendMessage.propTypes = {
    sendMessage: PropTypes.func.isRequired,
  };

export default SendMessage

