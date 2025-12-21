import { createTheme } from "@mui/material";

const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "fit-content",
          height: "32px",
          padding: "0px 12px",
          boxShadow: "none",
        },
        sizeMedium: {
          height: "32px",
          padding: "0px 12px",
        },
      },
    },
  },
});

export default buttonTheme;
