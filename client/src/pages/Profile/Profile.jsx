import { Avatar, Button, Divider, Slide, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import TranslateIcon from "@mui/icons-material/Translate";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Profile.css";
import { useAuth } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import ChatHeader from "../../components/Header/ChatHeader";
const URL = "https://mediq-service.onrender.com/api/v1/users";
export default function Profile() {
    const { logout } = useAuth();
    const [user, setUser] = useState();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token !== null) {
            const fetchData = async () => {
                const result = await axios.get(
                    URL + `/${jwtDecode(token).userId}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    }
                );
                console.log(result.data);
                setUser(result.data);
            };
            fetchData();
        }
    }, []);
    const handleLogout = async () => {
        await logout();
    };
    return (
        <Slide direction="left" in>
            <div className="Profile Page">
                <div className="back-button" style={{ width: "100%" }}>
                    <ChatHeader />
                </div>
                <div className="user-info">
                    <Avatar
                        src={user?.profilePicture}
                        alt=""
                        sx={{ width: "100px", height: "100px" }}
                    />
                    <Typography variant="h5" color="#FAFAFA">
                        {user?.username}
                    </Typography>
                    <Typography variant="h6" color="#FAFAFA">
                        {user?.email}
                    </Typography>
                    <Button variant="contained">Edit Profile</Button>
                </div>

                <div className="menu-container">
                    <Link>
                        <div className="menu-item" style={{ color: "#FAFAFA" }}>
                            <InboxIcon />
                            History
                        </div>
                    </Link>
                    <Divider orientation="horizontal" sx={{ width: 1 }} />
                    <Link>
                        <div className="menu-item" style={{ color: "#FAFAFA" }}>
                            <TranslateIcon />
                            Languages
                        </div>
                    </Link>
                    <Divider orientation="horizontal" sx={{ width: 1 }} />
                    <Link>
                        <div className="menu-item" style={{ color: "#FAFAFA" }}>
                            <InfoIcon />
                            About
                        </div>
                    </Link>
                    <Divider orientation="horizontal" sx={{ width: 1 }} />

                    <div
                        className="menu-item"
                        style={{ color: "#FAFAFA" }}
                        onClick={handleLogout}
                    >
                        <LogoutIcon color="#FAFAFA" />
                        Logout
                    </div>
                </div>
                <NavBar />
            </div>
        </Slide>
    );
}
