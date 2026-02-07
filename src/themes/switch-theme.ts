import { createTheme } from "@mui/material";

const switchTheme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 0,
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: theme.palette.grayscale.gray700,
          borderImage: "none",
          borderRadius: "50px",
        }),
        track: ({ theme }) => ({
          backgroundColor: theme.palette.grayscale.white,
        }),
        switchBase: ({ theme }) => ({
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: theme.palette.main.primary,
          },
        }),
      },
    },
  },
});

export default switchTheme;
