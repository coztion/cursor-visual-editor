import { RouterProvider } from "react-router";
import AppRouter from "./routers/AppRouter";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";

import "./styles/global.css";
import "./styles/init.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};

export default App;
