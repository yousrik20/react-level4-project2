import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";
export default function () {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{ position: "fixed", bottom: "22px", left: "22px" }}
      >
        <Fab
          onClick={() => {
            setIsOpen(true);
          }}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{}}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            bgcolor: theme.palette.background.default,
            width: 377,
            padding: "22px",
            borderRadius: "6px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", mb: 1}}
            variant="h6"
            component="h2"
          >
            Create a post
          </Typography>
          <Stack direction="row" alignItems="center">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            ></Avatar>
            <Typography variant="body1">Layla Hassan</Typography>
          </Stack>
          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            rows={3}
            placeholder="What is in your mind ..."
            variant="standard"
          />
          <Stack direction={"row"} spacing={1} my={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup sx={{width:'100%'}} variant="contained" aria-label="Basic button group">
            <Button sx={{flexGrow:1}}>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
