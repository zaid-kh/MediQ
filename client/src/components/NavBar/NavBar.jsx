import React from 'react';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import './NavBar.css'; 

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <div className="logoContainer">
        <AssistantPhotoIcon className="logoIcon" />
      </div>
      <div className="chatIconContainer">
        <IoChatbubbleEllipsesOutline className="chatIcon" fontSize="32px" color="#fff" />
      </div>
      <div>
        <FormatListBulletedIcon sx={{ fontSize: "32px", color: "#fff" }} className="listIcon" />
      </div>
    </div>
  );
}
