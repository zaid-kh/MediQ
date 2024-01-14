import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SpecialtyCard from "./components/Cards/SpecialtyCard";
import { green } from "@mui/material/colors";
import WelcomeBox from "./components/Cards/WelcomeBox";
import ChatInput from "./components/Chat/ChatInput";

function App() {
  return (
    <>
    <div style={{backgroundColor: "#fff"}}>

    <Header profileImg={"https://tse1.explicit.bing.net/th?id=OIP.icYHueoy2I4AYD8SJOH-0wHaHa&pid=Api&P=0&h=180"} name={"Alaa Muhissen"} />
    <WelcomeBox />
    <SpecialtyCard
     icon={""}
     color={"#00A859"}
     backgroundColor={"#fff"}
     />
    <NavBar />
    <ChatInput />
    </div>
    </>
  );
}

export default App;
