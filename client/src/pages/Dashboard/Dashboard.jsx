import React, { useEffect, useState } from 'react';
import WelcomeBox from '../../components/Cards/WelcomeBox';
import NavBar from '../../components/NavBar/NavBar';
import SpecialtyCard from '../../components/Cards/SpecialtyCard';
import Header from '../../components/Header/Header';
import axios from 'axios';
import { useTheme } from '@mui/material/styles'; 
import { useAuth } from '../../context/AuthContext';
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { specialties } from '../../../public/data/specialties';
import Answer from '../../components/chat-answer/Answer';

function Dashboard() {
  const { accessToken, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (accessToken) {
          const response = await axios.get('https://mediq-service.onrender.com/api/v1/user', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        logout(); 
      }
    };

    fetchUserData();
  }, [accessToken, logout]);

  return (
    <>
       <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '15px',
          padding: '0px 42px 22px 43px',
          backgroundColor: theme.palette.background.default, 
        }}
      >
        <Header
          profileImg={userData?.profileImg || 'https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=180'}
          name={userData?.name || 'Guest'}
        />
        <WelcomeBox />
        <div
        style={{
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"space-between"
          
        }}>
        {specialties.map((specialty)=> (
          <SpecialtyCard
          key={specialty.id}
          icon = {specialty.icon}
          color = {specialty.color}
          backgroundColor= {specialty.background} specialtyName = {specialty.specialtyName}
          />       
          )) 
        }
        </div>
        <Answer/>
      </div>
      <footer>
        <NavBar />
      </footer>
      </ThemeProvider>
    </>
  );
}

export default Dashboard;
