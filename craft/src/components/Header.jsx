import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: '1px solid white',
        backgroundColor: 'black',
        px: 2,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left: Menu */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MenuIcon sx={{ color: 'white' }} />
          <Typography variant="body1" sx={{ color: 'white' }}>
            Menu
          </Typography>
        </Box> */}

        {/* Center: Logo */}
        <Box sx={{ textAlign: 'left', flexGrow: 1, ml: -3 }}>
          <Box
            component="img"
            src={logo}
            alt="Aira Creations Logo"
            sx={{
              height: 60, // Adjust size as needed
              objectFit: 'contain',
              display: 'inline-block',
            }}
          />
        </Box>

        {/* Right: Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton>
            <AccountCircleOutlinedIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton>
            <ShoppingBagOutlinedIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
