import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
  Divider,
} from "@mui/material";

import AddPost from "components/AddPost";
import AppBarr from "components/AppBar";
import MyList from "components/List";
import Posts from "components/Posts";
import RightBar from "components/RightBar";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";



function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setShowList] = useState("none");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <AppBarr showList={showList} setShowList={setShowList} />

        <Stack
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <MyList
            {...{ showList, setShowList, setmyMOde, theme }}
          
          />
          <Posts />
          <RightBar theme={theme} />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
