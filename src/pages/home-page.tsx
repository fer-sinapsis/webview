import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import { Button, Icon, IconButton, Typography } from "@mui/material";
import { PhoneUtils } from "../utils/phone-utils";
import Footer from "../components/footer/footer";

const Container = styled(Box)(({ theme }) => {
  return {
    height: "100%",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
});

const TypographyStyled = styled(Typography)(({ theme }) => {
  return {
    fontSize: "48px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  };
});

const HomePage = () => {
  return (
    <Container>
      <TypographyStyled variant="h2">Press to open Camera</TypographyStyled>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={PhoneUtils.cameraPermissions}
      >
        <CameraAltRoundedIcon fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default HomePage;
