import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Login from "./pages/Login/login";
import { lightBlue } from "@mui/material/colors";
import Register from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";

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
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
