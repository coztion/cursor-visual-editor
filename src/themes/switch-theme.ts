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
        track: ({ theme, ownerState }) => ({
          backgroundColor: ownerState.disabled
            ? theme.palette.grayscale.gray900
            : theme.palette.grayscale.white,
        }),
        switchBase: ({ theme }) => ({
          "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: theme.palette.main.primary,
          },
          "&.Mui-checked.Mui-disabled + .MuiSwitch-track": {
            backgroundColor: theme.palette.grayscale.gray900,
          },
          "&.Mui-checked .MuiSwitch-thumb": {
            backgroundColor: theme.palette.main.secondary,
          },
          "&.Mui-checked.Mui-disabled .MuiSwitch-thumb": {
            backgroundColor: theme.palette.grayscale.gray400,
          },
        }),
        input: {
          left: "unset",
          top: "unset",
        },
      },
    },
  },
});

export default switchTheme;
