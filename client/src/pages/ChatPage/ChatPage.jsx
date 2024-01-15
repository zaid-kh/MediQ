import React , {useState}  from 'react'
import ChatInput from '../../components/Chat/ChatInput'
import QuestionComponent from '../../components/Chat/QuestionComponent'
import AnswerComponent from '../../components/Chat/AnswerComponent'
import ChatHeader from '../../components/Header/ChatHeader'
import axios from 'axios'

function ChatPage() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState({}); 

  const handleSendClick = async(message) => {
    console.log('Message sent:', message);
    try {
      const userMessage = {
        role: "user",
        content: inputValue,
      }
      const newMessage  = [...messages, userMessage]
      const response = await axios.post("http://localhost:3030/api/symptoms/analyze", {
        prompt:newMessage,
});



        setMessages((current) => [...current,userMessage,response.data]);
        console.log(message)
    } catch (error) {
      
    }
  };
  
  return (
    <>
    <div style={{backgroundColor: "#393C49" , height:'100vh', padding: "20px"}}>
        <ChatHeader />
     <div>
      
    <QuestionComponent question={inputValue} />
    <AnswerComponent answer={messages}/>
    </div>
    <ChatInput inputValue={inputValue} setInputValue={setInputValue} onSendClick={handleSendClick} />
    </div>
    </>
  )
}

export default ChatPage