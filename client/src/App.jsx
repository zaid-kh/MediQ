import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Login from "./pages/Login/login";
import { lightBlue } from "@mui/material/colors";
import Register from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Profile from "./pages/Profile/Profile";
import { AuthProvider } from "./context/AuthContext";

function App() {
    const theme = createTheme({
        palette: {
            primary: lightBlue,
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
