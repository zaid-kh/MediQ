import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    login: () => {},
    register: () => {},
    logout: () => {},
    logoutAll: () => {},
    accessToken: "",
});

const URL = "https://mediq-service.onrender.com/api/v1/users";
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
            setAccessToken(result.data.accessToken);
            localStorage.setItem(
                "token",
                JSON.stringify(result.data.accessToken)
            );
        } catch (error) {
            console.log(error);
            return error;
        }
    };
    const register = async (userInfo) => {
        try {
            const result = await axios.post(URL + "register", userInfo);
            console.log(result);
            setAccessToken(result.data.accessToken);
            localStorage.setItem(
                "token",
                JSON.stringify(result.data.accessToken)
            );
        } catch (error) {
            console.log(error);
            return error;
        }
    };
    const logout = async () => {
        try {
            if (accessToken) {
                await axios.post(URL + "/logout", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + accessToken,
                    },
                });
                localStorage.clear();
                setAccessToken("");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    };
    const logoutAll = async () => {
        try {
            if (accessToken) {
                await axios.post(URL + "/logoutAll", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + accessToken,
                    },
                });
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
        logoutAll,
        accessToken,
    };
    return (
        <AuthContext.Provider value={AuthValues}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
