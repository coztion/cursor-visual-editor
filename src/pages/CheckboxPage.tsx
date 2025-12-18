import { Checkbox } from "@mui/material";
import Page from "../components/Page";

const CheckboxPage = () => {
  return (
    <Page>
      <Checkbox />
      <Checkbox checked />
      <Checkbox readOnly />
      <Checkbox checked readOnly />
      <Checkbox disabled />
      <Checkbox checked disabled />
    </Page>
  );
};

export default CheckboxPage;
