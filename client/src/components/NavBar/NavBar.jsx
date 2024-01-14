import React from 'react';
import { Link } from 'react-router-dom';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <Link to="/" className="logoContainer">
        <AssistantPhotoIcon className="logoIcon" />
      </Link>
      <Link to="/chat" className="chatIconContainer">
        <IoChatbubbleEllipsesOutline className="chatIcon" fontSize="32px" color="#fff" />
      </Link>
      <Link to="/settings" className="listIcon">
        <FormatListBulletedIcon sx={{ fontSize: '32px', color: '#fff' }} />
      </Link>
    </div>
  );
}
