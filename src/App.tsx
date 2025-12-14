import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
};

export default App;
