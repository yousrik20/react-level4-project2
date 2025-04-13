import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";

export default function Posts() {
  const myCards = [
    { letter: "A", color: "purple", username: "Ali Hassan",imgLink:'https://images.pexels.com/photos/30548780/pexels-photo-30548780/free-photo-of-artist-painting-with-vibrant-colors-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { letter: "N", color: "teal", username: "Alaa Hassan" ,imgLink:'https://images.pexels.com/photos/30989951/pexels-photo-30989951/free-photo-of-lawson-convenience-store-in-snowy-night-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    { letter: "D", color: "lightblue", username: "Doaa Hassan" ,imgLink:'https://images.pexels.com/photos/28617427/pexels-photo-28617427/free-photo-of-elegant-presentation-of-turkish-tea-in-sunlit-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    { letter: "M", color: "royalblue", username: "Walaa Hassan" ,imgLink:'https://images.pexels.com/photos/29107893/pexels-photo-29107893/free-photo-of-traditional-berber-man-in-ksar-of-ait-benhaddou.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
  ];
  return (
    <Box sx={{ flexGrow: "3"}}>
      {myCards.map((item) => {
        return (
          <Card sx={{ maxWidth: 444, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor:item.color }} aria-label="recipe">
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.username}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}
