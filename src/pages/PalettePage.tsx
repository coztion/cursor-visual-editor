import { Box, Stack, styled } from "@mui/material";
import Page from "../components/Page";
import { GRAYSCALE, MAIN, SEMANTIC } from "../constants/PALETTE";

const PalettePage = () => {
  return (
    <Page>
      <Stack direction="row" gap={2}>
        <PaletteBox bgcolor={MAIN.primary} />
        <PaletteBox bgcolor={MAIN.secondary} />
      </Stack>
      <Stack direction="row" gap={2}>
        <PaletteBox bgcolor={GRAYSCALE.white} />
        <PaletteBox bgcolor={GRAYSCALE.gray50} />
        <PaletteBox bgcolor={GRAYSCALE.gray100} />
        <PaletteBox bgcolor={GRAYSCALE.gray200} />
        <PaletteBox bgcolor={GRAYSCALE.gray300} />
        <PaletteBox bgcolor={GRAYSCALE.gray400} />
        <PaletteBox bgcolor={GRAYSCALE.gray500} />
        <PaletteBox bgcolor={GRAYSCALE.gray600} />
        <PaletteBox bgcolor={GRAYSCALE.gray700} />
        <PaletteBox bgcolor={GRAYSCALE.gray800} />
        <PaletteBox bgcolor={GRAYSCALE.gray900} />
        <PaletteBox bgcolor={GRAYSCALE.black} />
      </Stack>
      <Stack direction="row" gap={2}>
        <PaletteBox bgcolor={SEMANTIC.error} />
        <PaletteBox bgcolor={SEMANTIC.warning} />
      </Stack>
    </Page>
  );
};

const PaletteBox = styled(Box)`
  width: 50px;
  height: 50px;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.palette.grayscale.black};
`;

export default PalettePage;
