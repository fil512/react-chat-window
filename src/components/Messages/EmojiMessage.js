import React, { Component } from 'react'


const EmojiMessage = (props) => {
  return (
    <div className="se-message--content" >
      <div className="sc-message--author">{props.author}</div>
      <div className="sc-message--emoji">{props.data.emoji}</div>
    </div>
  );
}

export default EmojiMessage