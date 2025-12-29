import { createTheme } from "@mui/material";
import React from "react";
import CheckIcon from "../components/CheckIcon";

const checkBoxTheme = createTheme({
  components: {
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: React.createElement(CheckIcon),
        icon: React.createElement("span", {
          style: { width: "20px", height: "20px" },
        }),
      },
      styleOverrides: {
        root: ({ theme }) => ({
          width: "20px",
          height: "20px",
          padding: 0,
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: theme.palette.grayscale.gray700,
          borderRadius: "4px",

          "& svg": {
            display: "none",
          },

          "&.Mui-checked": {
            borderColor: theme.palette.main.primary,

            "& svg": {
              display: "block",
              color: theme.palette.main.primary,
            },
          },

          "&.Mui-disabled": {
            borderColor: theme.palette.grayscale.gray200,
            backgroundColor: theme.palette.grayscale.gray50,

            "&.Mui-checked": {
              backgroundColor: theme.palette.grayscale.gray200,

              "& svg": {
                color: theme.palette.grayscale.white,
              },
            },
          },
        }),
      },
    },
  },
});

export default checkBoxTheme;
