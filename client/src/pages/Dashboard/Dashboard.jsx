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
import { jwtDecode } from "jwt-decode";
import QuestionComponent from '../../components/Chat/QuestionComponent';
import AnswerComponent from '../../components/Chat/AnswerComponent';
const URL = "https://mediq-service.onrender.com/api/v1/users";

function Dashboard() {
  const { accessToken, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); 
      if (token) {
        try {
          const userId = jwtDecode(token).userId;
          const result = await axios.get(`${URL}/${userId}`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          setUserData(result.data);
          console.log(result.data); 
        } catch (error) {
          console.error('Error fetching user data:', error);
       
        }
      }
    };
      fetchData();
  }, []);

  return (
    <>
       {/* <ThemeProvider theme={theme}>
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
          profileImg={userData?.profilePicture || 'https://tse4.mm.bing.net/th?id=OIP.wEsBe2udHBieFeZVmus8qAHaHk&pid=Api&P=0&h=180'}
          name={userData?.username || 'Guest'}
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
      </div>
      <footer>
        <NavBar />
      </footer>
      </ThemeProvider> */}

      <QuestionComponent question={"howkf kffj"} />
      <AnswerComponent answer={"fkfkfk"}/>
    </>
  );
}

export default Dashboard;
