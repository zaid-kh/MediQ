import React from 'react';
import MicIcon from '@mui/icons-material/Mic';
import { IoSend } from 'react-icons/io5';
import './Chat.css'; 

function ChatInput() {
  return (
    <div className="chatInputContainer">
      <input
        placeholder="Write your question"
        type="text"
        className="inputField"
        style={{
          background: 'none',
          outline: "none",
          color: "#fff"
        }}
      />
      <div className="iconContainer">
        <button className="iconButton">
          <MicIcon sx={{ color: "#fff", fontSize: "24px" }} />
        </button>
        <button className="iconButton">
          <IoSend color="rgb(48 97 255)" fontSize="24px" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
