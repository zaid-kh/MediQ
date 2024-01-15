import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function RecommendationCard({ header, body }) {
    return (
        <Card sx={{ minWidth: 275 }} color="#1F1D2B">
            <CardContent>
                <Typography variant="h5" component="div">
                    {header}
                </Typography>
                <Typography variant="body2">{body}</Typography>
            </CardContent>
        </Card>
    );
}
