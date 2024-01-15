import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import { IoSend } from 'react-icons/io5';
import './Chat.css';

function ChatInput({ inputValue, setInputValue,onSendClick  }) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
  const handleSendClick = () => {
    onSendClick(inputValue);
    setInputValue(''); 
  };

  return (
    <div className="chatInputContainer">
      <input
        placeholder="Write your question"
        type="text"
        className="inputField"
        style={{
          background: 'none',
          outline: 'none',
          color: '#fff',
        }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="iconContainer">
        <button className="iconButton">
          <MicIcon sx={{ color: '#fff', fontSize: '24px' }} />
        </button>
        <button className="iconButton">
          <IoSend color="rgb(48 97 255)" fontSize="24px" onClick={handleSendClick}/>
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
