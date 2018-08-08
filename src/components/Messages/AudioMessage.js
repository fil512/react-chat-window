import React, { Component } from 'react'


const AudioMessage = (message) => {
  const sound = new Audio(message.url + "/" + message.data.audio);
  sound.play();
  return (
    <div className="se-message--content" >
      <div className="sc-message--author">{message.author}</div>
      <div className="sc-message--emoji">{message.data.emoji}</div>
    </div>
  );
}

export default AudioMessage