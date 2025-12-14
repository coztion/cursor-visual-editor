import { RouterProvider } from "react-router";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
