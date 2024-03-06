import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exerciseDetail;

  const formattedInstructions = Array.isArray(instructions)
    ? instructions.join("\n")
    : "";

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography variant="h3" fontWeight={700}>
            {name}
          </Typography>
          <Typography variant="h6" fontWeight={700} textTransform="capitalize">
            <strong>{name}</strong> is an effective exercise that can help you
            achieve your fitness goal by targeting your{" "}
            <strong>{target}</strong>.<br />
            Regular <strong>{name}</strong> practice can improve your physical
            condition and overall well-being.
          </Typography>
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "rgba(82, 183, 26, 0.2)",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography
                variant="h5"
                fontWeight={700}
                textTransform="capitalize"
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack gap="20px" sx={{ p: "20px" }}>
        <Typography variant="h4" fontWeight={700} textTransform="capitalize">
          Instructions
        </Typography>
        <Typography
          variant="h6"
          sx={{ whiteSpace: "pre-line", textAlign: "justify" }}
        >
          {formattedInstructions}
        </Typography>
      </Stack>
    </div>
  );
};

export default Detail;
