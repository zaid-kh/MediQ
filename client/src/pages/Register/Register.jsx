import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slide,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import BasicModal from "../../components/BasicModal/BasicModal";
import dayjs from "dayjs";
import CircularIndeterminate from "../../components/CircularIndeterminate/CircularIndeterminate";

export default function Register() {
    const [message, setMessage] = useState("");
    const genderRef = useRef();
    const dateRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const countryRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading((prev) => !prev);
        const splitDate = dateRef.current.value.split("/");
        const newDate = [splitDate[2], splitDate[0], splitDate[1]];
        const selectedDate = newDate.join("-");
        console.log(selectedDate);
        const userInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            username: usernameRef.current.value,
            dateOfBirth: selectedDate,
            country: countryRef.current.value,
            gender: genderRef.current.value,
        };
        console.log(userInfo);
        const res = await register(userInfo);
        console.log(res);
        if (res?.status !== 201) {
            setIsLoading((prev) => !prev);
            setMessage(res.response.data.message);
        } else {
            setIsLoading((prev) => !prev);
            navigate("/login");
        }
    };

    return (
        <Slide direction="left" in>
            <main className="Register Page">
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="#FAFAFA">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="username"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Display Name"
                                    autoFocus
                                    inputRef={usernameRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        id="gender"
                                        label="Gender"
                                        defaultValue="Male"
                                        inputRef={genderRef}
                                        required
                                    >
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">
                                            Female
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    inputRef={emailRef}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    inputRef={passwordRef}
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label="Date of Birth"
                                        inputRef={dateRef}
                                        defaultValue={dayjs("2024-01-01")}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    required
                                    fullWidth
                                    id="country"
                                    label="Country"
                                    name="country"
                                    inputRef={countryRef}
                                    autoComplete="country-name"
                                />
                            </Grid>
                        </Grid>
                        {isLoading ? (
                            <CircularIndeterminate />
                        ) : (
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                        )}
                        <Grid container justifyContent="flex-start">
                            <Grid item>
                                <Link
                                    href="/login"
                                    variant="body2"
                                    color="#FAFAFA"
                                >
                                    Already have an account? Sign in
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
