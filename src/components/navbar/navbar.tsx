import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import DrawerCustom from './drawer';
import { useLocation } from 'react-router-dom';

const Container = styled(Box)(({ theme }) => {
  return {
    width: '100%',
    display: 'flex',
    position: 'fixed',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  };
});

export default function Navbar() {
  const routes = [
    {
      name: 'Home',
      to: '/webview',
    },
    {
      name: 'Gallery',
      to: '/webview/gallery',
    },
    {
      name: 'Contact',
      to: '/webview/contact',
    },
  ];

  const location = useLocation();

  const getCurrentRouteName = () => {
    const currentRoute = routes.find((route) => route.to === location.pathname);
    return currentRoute ? currentRoute.name : '';
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DrawerCustom routes={routes} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {getCurrentRouteName()}
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
