import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList'
import UserInput from './UserInput'
import Header from './Header'


class ChatWindow extends Component {
    constructor(props) {
      super(props);
    }

    onUserInputSubmit(message) {
      this.props.onUserInputSubmit(message);
    }

    render() {
      let messageList = this.props.messageList || [];
      let classList = [
        "sc-chat-window",
        (this.props.isOpen ? "opened" : "closed")
      ];
      return (
        <div className={classList.join(' ')}>
          <Header
            teamName={this.props.agentProfile.teamName}
            imageUrl={this.props.agentProfile.imageUrl}
            onClose={this.props.onClose}
          />
          <MessageList
            messages={messageList}
            imageUrl={this.props.agentProfile.imageUrl}
            login={this.props.login}
          />
          <UserInput showEmoji={this.props.showEmoji} login={this.props.login} onSubmit={this.props.onUserInputSubmit} />
        </div>
      );
    }
}

ChatWindow.propTypes = {
  showEmoji: PropTypes.bool,
  login: PropTypes.string
}

export default ChatWindow;
