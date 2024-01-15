import React from 'react'

import ChatHeader from '../../components/Header/ChatHeader'
import NavBar from '../../components/NavBar/NavBar'

function Recomendation() {
  return (
    <>
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        padding: "0px 42px 22px 43px",
        backgroundColor: "#393C49",
        height: "100vh",
    }}>
     <ChatHeader />

      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>


        </div>
     <NavBar />
     </div>
    </>
  )
}

export default Recomendation