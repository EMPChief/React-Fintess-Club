import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography color="limegreen" fontWeight={600} fontSize="26px">
        EMPFitness Club
      </Typography>
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Reach your peak!
        <br />
        Train smart!
        <br />
        Train with us!
      </Typography>
      <Typography fontSize="21px" fontFamily="Alegreya" lineHeight="35px">
        Discover effective exercises for your body.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: "20px", backgroundColor: "limegreen", padding: "10px" }}
        href="/exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        color="limegreen"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        EXERCISES
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
