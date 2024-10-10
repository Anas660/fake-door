import { Box, Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 5,
        }}
      >
        <Box>
          <Image
            src={
              "https://fakedoor.com/_next/static/media/logo-physics.236e5a5e.svg"
            }
            alt="navbar"
            height={"80"}
            width={"200"}
          />
        </Box>
        <Box>Ahad</Box>
      </Box>
      <Divider />
    </>
  );
};
