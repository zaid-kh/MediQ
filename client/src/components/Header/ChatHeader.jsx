import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function ChatHeader() {
    const navigate = useNavigate();
  return (
    <div>
        <button style={{
            border:'none',
            background :'none'
        }}
        onClick={(e)=>{e.preventDefault(); navigate('/dashboard')}}>
        <IoMdArrowRoundBack fontSize='32px' color='#fff' />
        </button>
    </div>
  )
}

export default ChatHeader