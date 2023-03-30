import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import { Button, Icon, IconButton, Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => {
  return {
    height: "100vh",
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
  function grantCameraPermission() {
    const event = {
      type: "camera_permission",
      hasPermission: true,
    };
    sendMessageToFlutter(event);
  }

  function sendMessageToFlutter(message: any) {
    window.ReactNativeWebView.postMessage(JSON.stringify(message));
  }

  return (
    <Container>
      <TypographyStyled variant="h2">Press to open Camera</TypographyStyled>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={grantCameraPermission}
      >
        <CameraAltRoundedIcon fontSize="large"/>
      </IconButton>
    </Container>
  );
};

export default HomePage;
