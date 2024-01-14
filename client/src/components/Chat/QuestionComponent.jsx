import React from 'react'

function QuestionComponent({ question }) {
  return (
    <div style={{ textAlign: 'left', margin: '10px 0', padding: '10px', background: 'lightBlue', borderRadius: '8px' , color: '#fff' }}>
      <p style={{ margin: '0' }}>{question}</p>
    </div>
  )
}

export default QuestionComponent