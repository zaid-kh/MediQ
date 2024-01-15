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
import Answer from '../../components/chat-answer/Answer';

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
        console.log(result.data)
        } catch (error) {
          console.error('Error fetching user data:', error);
       
        }
      }
    };
      fetchData();
  }, []);

  return (
    <>
   

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '15px',
          padding: '0px 42px 22px 43px',
          backgroundColor: '#393C49', 
          height: '100vh'
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
          justifyContent:"space-between",
          width:"360px"
          
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
        <Answer/>
      </div>
      <footer>
        <NavBar />
      </footer>
      </div>

    
    </>
  );
}

export default Dashboard;
