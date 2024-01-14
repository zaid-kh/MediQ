import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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
import { useRef } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
    const genderRef = useRef();
    const dateRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const countryRef = useRef();
    const { register } = useAuth();
    const handleSubmit = async (event) => {
        event.preventDefault();
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
        await register(userInfo);
    };

    return (
        <Slide direction="left" in>
            <Container component="main" maxWidth="xs">
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
                    <Typography component="h1" variant="h5">
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
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        label="Date of Birth"
                                        inputRef={dateRef}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Slide>
    );
}
