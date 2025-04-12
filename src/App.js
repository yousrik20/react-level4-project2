import {
  createTheme,
  Button,
  ThemeProvider,
  CssBaseline,
  Grid,
  styled,
  Paper,
} from "@mui/material";
import AppBarr from "components/AppBar";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
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
      <AppBarr />
     
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid size={{xs:8,md:12}}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />

      <Button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );

          setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
        }}
        variant="text"
        color="primary"
      >
        Change theme
      </Button>
    </ThemeProvider>
  );
}

export default App;
