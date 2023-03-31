import React, { useEffect, useState } from "react";
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

const ImageContainer = styled(Box)(({ theme }) => {
  return {
    width: 300,
    height: 300,
    bgcolor: 'background.paper',
    border: '1px solid black',
    marginTop: 20,
  };
});

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    function handleMessage(event : any) {
      const data = event.data;
      if (data.type === 'selected_image') {
        setSelectedImage(data.base64Image);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);


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
      <ImageContainer>
        {selectedImage && <img src={`data:image/png;base64,${selectedImage}`} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
      </ImageContainer>
    </Container>
  );
};

export default GalleryPage;
