const { grey } = require("@mui/material/colors");




const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ali: {
            main: "#64748B",
          },

          favColor: {
            main: "rgb(247,247,247)"
          },
        }
      : {
          // palette values for dark mode
          ali: {
            main: "#008080",
          },

          favColor: {
            main: null,
          },
        }),
  },
});


export default getDesignTokens;