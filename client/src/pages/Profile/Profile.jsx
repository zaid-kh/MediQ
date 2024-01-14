import { Avatar, Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import TranslateIcon from "@mui/icons-material/Translate";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Profile.css";
import { useAuth } from "../../context/AuthContext";
export default function Profile() {
    const { logout } = useAuth();
    const handleLogout = async () => {
        await logout();
    };
    return (
        <div className="Profile">
            <div className="user-info">
                <Avatar
                    src=""
                    alt=""
                    sx={{ width: "100px", height: "100px" }}
                />
                <Typography variant="h5">Display Name</Typography>
                <Typography variant="h6">User Email</Typography>
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
                    <div className="menu-item" onClick={handleLogout}>
                        <LogoutIcon />
                        Logout
                    </div>
                </Link>
            </div>
        </div>
    );
}
