import React from 'react';
import { Card } from '@mui/material';
import './Header.css'; 

function Header({ profileImg, name }) {
  return (
    <>
      <Card className="cardContainer" sx={{}} />
      <div className="headerContainer">
        <div className="profileImageContainer">
          <img src={profileImg} alt="Profile Img" className="profileImage" />
        </div>

        <div className="textContainer">
          <span className="welcomeText">Welcome</span>
          <span className="nameText">{name}</span>
        </div>
      </div>
    </>
  );
}

export default Header;
