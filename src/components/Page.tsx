import { Stack } from "@mui/material";
import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <Stack width="100vw" height="100vh" rowGap={2} padding={5} bgcolor="white">
      {children}
    </Stack>
  );
};

export default Page;
