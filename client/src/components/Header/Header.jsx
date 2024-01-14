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
          <h4 className="welcomeText">Welcome</h4>
          <p className="nameText">{name}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
