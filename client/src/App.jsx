import { createTheme, ThemeProvider } from "@mui/material";
import Login from "./pages/Login/login";
import "./App.css";
import Register from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Profile from "./pages/Profile/Profile";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import ChatPage from "./pages/ChatPage/ChatPage";
import Recommendation from "./pages/Recommendation/Recommendation";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#3061ff",
            },
            secondary: {
                main: "#1F1D2B",
            },
            background: {
                default: "#393C49",
            },
            text: {
                primary: "#FAFAFA",
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/recommendations" element={<Recommendation />} />
                    </Routes>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
