import React, { Component } from 'react';
import chatIconUrl from './../../assets/chat-icon.svg';

const TextMessage = (props) => {
  return (
    <div className="se-message--content" >
      <div className="sc-message--author">{props.author}</div>
      <div className="sc-message--text">{props.data.text}</div>
    </div>
  );
}

export default TextMessage