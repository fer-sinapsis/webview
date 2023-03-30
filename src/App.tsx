// import HomePage from "./pages/home-page";

// function App() {
//   return (
//     <>
//       <HomePage />
//     </>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home-page';
import Footer from './components/footer/footer';
import { Box, styled, useMediaQuery, useTheme } from '@mui/material';

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
        {/* <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
      {upMd ? <Footer /> : null}
    </div>
  </BrowserRouter>
  );
};

export default App;