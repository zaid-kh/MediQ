import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function RecommendationCard({ header, body }) {
    return (
        <Card sx={{ width: 1, bgcolor: "#1F1D2B" }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: "8px" }}>
                    {header}
                </Typography>
                <Typography variant="body2">{body}</Typography>
            </CardContent>
        </Card>
    );
}
