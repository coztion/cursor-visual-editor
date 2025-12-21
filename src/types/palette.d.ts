import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    main: MainPalette;
    grayscale: GrayscalePalette;
    semantic: SemanticPalette;
  }

  interface PaletteOptions {
    main?: MainPalette;
    grayscale?: GrayscalePalette;
    semantic?: SemanticPalette;
  }
}

type MainPalette = {
  primary: string;
  secondary: string;
};

type GrayscalePalette = {
  white: string;
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  black: string;
};

type SemanticPalette = {
  error: string;
  warning: string;
};
