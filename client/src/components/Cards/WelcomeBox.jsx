import React from 'react'
import AiAvatar from '../../../public/Group.svg'
import './Card.css'
function WelcomeBox() {
  return (
   <div>
    <div className = "BoxContainer">
    
     <div className='BoxContainerRightSide'>
        <div>

        <h1 className='BoxHeader'>Chat in AI Doctor</h1>
        <h4 className='SubHeaderInBox'>You can ask her/him your medical questions</h4>
        <h4 className='SubHeaderInBox'>And know the required medicines</h4>
        </div>
        <div>
            <button className='StartConversation'
       >Start Chat</button>
        </div>
     </div>
     <div>
      <img src= {AiAvatar} alt="AI Avatar" className='AiDocAvatar'/>
     </div>
    </div>
   </div>
  )
}

export default WelcomeBox