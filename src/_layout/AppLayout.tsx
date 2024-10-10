import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar";
import { QueryProvider } from "../provider/QueryProvider";

interface AppLayoutProps extends PropsWithChildren {}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default AppLayout;
