import React from 'react'
import WelcomeBox from '../../components/Cards/WelcomeBox'
import NavBar from '../../components/NavBar/NavBar'
import SpecialtyCard from '../../components/Cards/SpecialtyCard'

import Header from '../../components/Header/Header'
function Dashboard() {
  return (
    <>
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "15px",
        padding:"0px 42px 22px 43px",
    }}>
        
        <Header 
          profileImg = {""}
          name= {""}
        />
        <WelcomeBox />

        <SpecialtyCard />
    
    </div>
    <footer>
        <NavBar />
    </footer>
    </>
  )
}

export default Dashboard