import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page';
import Footer from './components/footer/footer';
import { Box, styled, useMediaQuery, useTheme } from '@mui/material';
import GalleryPage from './pages/gallery';
import Navbar from './components/navbar/navbar';

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

const App: React.FC = () => {
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.down(600));

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/webview" element={<HomePage />} />
        <Route path="/webview/gallery" element={<GalleryPage />} />
      </Routes>
      {upMd ? <Footer /> : <Navbar/>}
    </div>
  </BrowserRouter>
  );
};

export default App;