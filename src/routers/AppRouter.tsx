import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default AppRouter;
