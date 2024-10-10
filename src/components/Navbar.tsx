import {
  Avatar,
  Box,
  Button,
  Divider,
  Popover,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 5,
          mb: 1,
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
        <Box>
          <div>
            <Box onClick={handleClick}>
              <Avatar>A</Avatar>
            </Box>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </div>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
