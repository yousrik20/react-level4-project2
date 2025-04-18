import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import AppBarr from "components/AppBar";
import MyList from "components/List";
import Posts from "components/Posts";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));
function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <AppBarr />

        <Stack direction={"row"}>
          <MyList setmyMOde={setmyMOde} theme={theme} />
          <Posts/>
          <Typography sx={{ flexGrow: "2" }} className="border" variant="h6">
            box3
          </Typography>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
