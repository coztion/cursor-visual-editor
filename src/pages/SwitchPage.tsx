import { Switch } from "@mui/material";
import Page from "../components/Page";

const SwitchPage = () => {
  return (
    <Page>
      <Switch />
      <Switch checked />
      <Switch readOnly />
      <Switch checked readOnly />
      <Switch disabled />
      <Switch checked disabled />
    </Page>
  );
};

export default SwitchPage;
