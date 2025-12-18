import { createTheme } from "@mui/material";
import buttonTheme from "./button-theme";
import textFieldTheme from "./text-field-theme";
import switchTheme from "./switch-theme";
import checkBoxTheme from "./check-box-theme";
import typographyTheme from "./typography-theme";
import paletteTheme from "./palette-theme";

const theme = createTheme(
  {},
  buttonTheme,
  checkBoxTheme,
  paletteTheme,
  switchTheme,
  textFieldTheme,
  typographyTheme
);

export default theme;
