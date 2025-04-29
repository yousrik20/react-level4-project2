import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
} from "@mui/material";
import AppBarr from "components/AppBar";
import MyList from "components/List";
import Posts from "components/Posts";
import RightBar from "components/RightBar";
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
  const [showList,setShowList]=useState("none")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <AppBarr showList={showList} setShowList={setShowList} />

        <Stack direction={"row"}>
          <MyList showList={showList} setShowList={setShowList}  setmyMOde={setmyMOde} theme={theme} />
          <Posts/>
          <RightBar theme={theme}/>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
