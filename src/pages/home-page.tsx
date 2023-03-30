import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

const Container = styled(Box)(() => {
  return {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
      <Typography variant="h1" component="h1">
        Press to open Camera
      </Typography>
      <NewButton onClick={grantCameraPermission}>
        Grant Camera Permission
      </NewButton>
    </Container>
  );
};

export default HomePage;
