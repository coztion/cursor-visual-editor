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
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.main.secondary,

          "&:hover": {
            backgroundColor: theme.palette.main.secondary,
            boxShadow: "none",
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.grayscale.gray500,
          color: theme.palette.grayscale.gray900,

          "&:hover": {
            borderColor: theme.palette.grayscale.gray500,
            color: theme.palette.grayscale.gray900,
          },
        }),
      },
    },
  },
});

export default buttonTheme;
