import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Slide } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import BasicModal from "../../components/BasicModal/BasicModal";
import CircularIndeterminate from "../../components/CircularIndeterminate/CircularIndeterminate";

export default function Login() {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading((prev) => !prev);
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        const res = await login(data.get("email"), data.get("password"));

        if (res.status !== 200) {
            setIsLoading((prev) => !prev);
            setMessage(res.response.data);
        } else {
            setIsLoading((prev) => !prev);
            navigate("/dashboard");
        }
    };

    return (
        <Slide direction="left" in>
            <main className="Login Page">
                <Box
                    sx={{
                        p: 8,
                        borderRadius: "6px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="#FAFAFA">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            mt: 1,
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {isLoading ? (
                            <CircularIndeterminate />
                        ) : (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={isLoading}
                            >
                                Sign In
                            </Button>
                        )}
                        <Grid container>
                            <Grid item>
                                <Link
                                    href="/register"
                                    variant="body2"
                                    color="#FAFAFA"
                                >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {message && <BasicModal msg={message} setMsg={setMessage} />}
            </main>
        </Slide>
    );
}
