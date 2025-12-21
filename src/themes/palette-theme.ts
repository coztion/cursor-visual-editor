import { createTheme } from "@mui/material";
import { GRAYSCALE, MAIN, SEMANTIC } from "../constants/PALETTE";

const paletteTheme = createTheme({
  palette: {
    main: {
      primary: MAIN.primary,
      secondary: MAIN.secondary,
    },
    grayscale: {
      white: GRAYSCALE.white,
      gray50: GRAYSCALE.gray50,
      gray100: GRAYSCALE.gray100,
      gray200: GRAYSCALE.gray200,
      gray300: GRAYSCALE.gray300,
      gray400: GRAYSCALE.gray400,
      gray500: GRAYSCALE.gray500,
      gray600: GRAYSCALE.gray600,
      gray700: GRAYSCALE.gray700,
      gray800: GRAYSCALE.gray800,
      gray900: GRAYSCALE.gray900,
      black: GRAYSCALE.black,
    },
    semantic: {
      error: SEMANTIC.error,
      warning: SEMANTIC.warning,
    },
  },
});

export default paletteTheme;
