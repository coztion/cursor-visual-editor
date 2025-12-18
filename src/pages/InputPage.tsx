import { TextField } from "@mui/material";
import Page from "../components/Page";

const InputPage = () => {
  return (
    <Page>
      <TextField placeholder="default" />
      <TextField placeholder="focused" focused />
      <TextField placeholder="error" error />
      <TextField
        placeholder="readOnly"
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
      <TextField placeholder="disabled" disabled />
    </Page>
  );
};

export default InputPage;
