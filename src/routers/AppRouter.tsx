import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";
import ButtonPage from "../pages/ButtonPage";
import CheckboxPage from "../pages/CheckboxPage";
import SwitchPage from "../pages/SwitchPage";
import InputPage from "../pages/InputPage";
import PalettePage from "../pages/PalettePage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/palette",
    element: <PalettePage />,
  },
  {
    path: "/button",
    element: <ButtonPage />,
  },
  {
    path: "/checkbox",
    element: <CheckboxPage />,
  },
  {
    path: "/switch",
    element: <SwitchPage />,
  },
  {
    path: "/input",
    element: <InputPage />,
  },
]);

export default AppRouter;
