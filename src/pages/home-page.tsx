import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

const Container = styled(Box)(({theme}) => {
  return {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      padding: "10px 20px",
      justifyContent: "center",
    },
  };
});

const TypographyStyled = styled(Typography)(({theme}) => {
  return {
    fontSize: "48px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  };
});

const NewButton = styled(Button)(() => {
  return {
    backgroundColor: "red",
    color: "white",
    boxShadow: "unset",
    "&:hover": {
      backgroundColor: "blue",
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
      <TypographyStyled variant="h2">
        Press to open Camera
      </TypographyStyled>
      <NewButton onClick={grantCameraPermission}>
        Grant Camera Permission
      </NewButton>
    </Container>
  );
};

export default HomePage;
