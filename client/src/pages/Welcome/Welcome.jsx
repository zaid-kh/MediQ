import { Button, Slide, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
export default function Welcome() {
    const navigate = useNavigate();
    return (
        <Slide direction="up" in>
            <div className="Welcome Page">
                <MedicalInformationIcon
                    sx={{
                        width: "100px",
                        height: "100px",
                        color: "primary.main",
                    }}
                />
                <Typography variant="h4">
                    Welcome To MediQ Your AI Medical Assistant
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate("/login")}
                >
                    Get Started
                </Button>
            </div>
        </Slide>
    );
}
