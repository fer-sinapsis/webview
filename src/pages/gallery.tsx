import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import { Button, Icon, IconButton, Typography } from "@mui/material";
import { PhoneUtils } from "../utils/phone-utils";

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

const GalleryPage = () => {
  return (
    <Container>
      <TypographyStyled variant="h2">Open Gallery to select a Photo</TypographyStyled>
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        sx={{ 
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)",
         }}
        onClick={PhoneUtils.galleryPermissions}
      >
        <PhotoRoundedIcon fontSize="large" />
      </IconButton>
    </Container>
  );
};

export default GalleryPage;
