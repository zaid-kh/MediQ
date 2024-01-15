import React from 'react'
import './Chat.css'
function QuestionComponent({ question }) {
  return (
    <div style={{
        display:"flex",
        justifyContent:"flex-end"
    }}>
    <div className="question"style={{ textAlign: 'left', margin: '10px 0', padding: '10px', background: '#1F1D2B', borderRadius: '8px' , color: '#fff' , position: "relative" , maxWidth:'45%'}}>
      <p style={{ margin: '0' }}>{question}</p>
    </div>
    </div>
  )
}

export default QuestionComponent