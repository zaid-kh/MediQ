import { Avatar, Button, Divider, Typography } from "@mui/material";
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
const URL = "https://mediq-service.onrender.com/api/v1/users";
export default function Profile() {
    const { logout } = useAuth();
    const [user, setUser] = useState();
    useEffect(() => {
        const token = localStorage.getItem("token");

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
    }, []);
    const handleLogout = async () => {
        await logout();
    };
    return (
        <div className="Profile">
            <div className="user-info">
                <Avatar
                    src={user?.profilePicture}
                    alt=""
                    sx={{ width: "100px", height: "100px" }}
                />
                <Typography variant="h5">{user?.username}</Typography>
                <Typography variant="h6">{user?.email}</Typography>
                <Button variant="contained" color="success">
                    Edit Profile
                </Button>
            </div>

            <div className="menu-container">
                <Link>
                    <div className="menu-item">
                        <InboxIcon />
                        History
                    </div>
                </Link>
                <Divider orientation="horizontal" sx={{ width: 1 }} />
                <Link>
                    <div className="menu-item">
                        <TranslateIcon />
                        Languages
                    </div>
                </Link>
                <Divider orientation="horizontal" sx={{ width: 1 }} />
                <Link>
                    <div className="menu-item">
                        <InfoIcon />
                        About
                    </div>
                </Link>
                <Divider orientation="horizontal" sx={{ width: 1 }} />
                <Link>
                    <div
                        className="menu-item"
                        style={{ color: "red" }}
                        onClick={handleLogout}
                    >
                        <LogoutIcon color="error" />
                        Logout
                    </div>
                </Link>
            </div>
        </div>
    );
}
