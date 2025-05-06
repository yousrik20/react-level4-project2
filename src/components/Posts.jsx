import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem, useTheme } from "@mui/material";
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from "@mui/icons-material";

export default function Posts() {
  const myCards = [
    {
      letter: "A",
      color: "#053ea8",
      username: "Ali Hassan",
      imgLink:
        "https://images.pexels.com/photos/30548780/pexels-photo-30548780/free-photo-of-artist-painting-with-vibrant-colors-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      letter: "N",
      color: "#a020f0",
      username: "Alaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/30989951/pexels-photo-30989951/free-photo-of-lawson-convenience-store-in-snowy-night-japan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      letter: "D",
      color: "#008080",
      username: "Doaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/28617427/pexels-photo-28617427/free-photo-of-elegant-presentation-of-turkish-tea-in-sunlit-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      letter: "M",
      color: "#053ea8",
      username: "Walaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/29107893/pexels-photo-29107893/free-photo-of-traditional-berber-man-in-ksar-of-ait-benhaddou.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  const theme=useTheme();
  return (
    <Box sx={{ flexGrow: "3" }} component="main">
      {myCards.map((item) => {
        return (
          <Card key={item.imgLink} sx={{ maxWidth: {xs:'97%',sm:'444px'}, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ color:theme.palette.getContrastText(item.color),bgcolor: item.color }} aria-label="recipe">
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
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
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box flexGrow={1}/>
              <Checkbox
                
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
              />
            </CardActions>
          </Card>
        );
      })}
      {renderMenu}
    </Box>
  );
}
