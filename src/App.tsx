import { RouterProvider } from "react-router";
import AppRouter from "./routers/AppRouter";

import "./styles/global.css";
import "./styles/init.css";

const App = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
