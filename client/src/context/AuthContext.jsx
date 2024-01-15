import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    login: () => {},
    register: () => {},
    logout: () => {},
    accessToken: "",
});

const URL = "https://mediq-service.onrender.com/api/v1/users";
const localURL = "http://localhost:3030/api/v1/users";
export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const login = async (email, password) => {
        try {
            const result = await axios.post(URL + "/login", {
                email,
                password,
            });
            console.log(result);
            setAccessToken(result.data.token);
            localStorage.setItem("token", JSON.stringify(result.data.token));
            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    };
    const register = async (userInfo) => {
        try {
            const result = await axios.post(URL, userInfo);
            console.log(result);
            return result;
        } catch (error) {
            return error;
        }
    };
    const logout = async () => {
        try {
            if (accessToken) {
                localStorage.clear();
                setAccessToken("");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    };
    useEffect(() => {
        if (localStorage.getItem("token") !== "undefined") {
            setAccessToken(JSON.parse(localStorage.getItem("token")));
        }
    }, []);

    const AuthValues = {
        login,
        register,
        logout,
        accessToken,
    };
    return (
        <AuthContext.Provider value={AuthValues}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
