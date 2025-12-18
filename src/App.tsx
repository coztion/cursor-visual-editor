import { RouterProvider } from "react-router";
import AppRouter from "./routers/AppRouter";
import { ThemeProvider } from "@mui/material";

import "./styles/global.css";
import "./styles/init.css";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};

export default App;
