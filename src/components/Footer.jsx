import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "limegreen", color: "white", p: "20px" }}>
      <Stack
        direction="row"
        variant="h5"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>© EMPFitness Club 2024. All rights reserved</Typography>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Stack>
    </Box>
  );
};

export default Footer;
