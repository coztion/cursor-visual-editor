import { Button } from "@mui/material";
import Page from "../components/Page";

const ButtonPage = () => {
  return (
    <Page>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button disabled>Disabled Button</Button>
    </Page>
  );
};

export default ButtonPage;
