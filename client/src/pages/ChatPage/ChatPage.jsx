import React from 'react'
import ChatInput from '../../components/Chat/ChatInput'
import QuestionComponent from '../../components/Chat/QuestionComponent'
import AnswerComponent from '../../components/Chat/AnswerComponent'
import ChatHeader from '../../components/Header/ChatHeader'


function ChatPage() {
  return (
    <>
    <div style={{backgroundColor: "#393C49" , height:'100vh', padding: "20px"}}>
        <ChatHeader />
     <div>
    <QuestionComponent question={"howkf kffj"} />
    <AnswerComponent answer={"fkfkfk"}/>
    </div>
    <ChatInput/>
    </div>
    </>
  )
}

export default ChatPage