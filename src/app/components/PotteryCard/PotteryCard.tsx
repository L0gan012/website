import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function PotteryCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/pottery.jpg"
        alt="pottery"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pottery
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Check out some of my pottery work.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
