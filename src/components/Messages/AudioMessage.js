import React, { Component } from 'react'


const AudioMessage = (message) => {
  return (
    <div className="se-message--content" >
      <div className="sc-message--author">{message.author}</div>
      <div className="sc-message--emoji">{message.data.emoji}</div>
    </div>
  );
}

export default AudioMessage