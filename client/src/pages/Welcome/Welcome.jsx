import { Button, Slide, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <Slide direction="up" in>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
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
      </Container>
    </Slide>
  );
}
