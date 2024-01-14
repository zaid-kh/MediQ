import { lightBlue } from '@mui/material/colors';
import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";

function AnswerComponent({ answer }) {
  return (
    <div style={{
        display:"flex",
        justifyContent:"flex-start",
        alignItems: "flex-end"
    }}>
        <FaUserDoctor color="lightBlue" fontSize="24px" />
        <div style={{ textAlign: 'right', margin: '10px 0', padding: '10px', background: '#f0f0f0', borderRadius: '8px',  maxWidth:'284px'}}>
            <p style={{ margin: '0' }}>{answer}</p>
        </div>
  </div>
  )
}

export default AnswerComponent