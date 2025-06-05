import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.png';

import React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BrushIcon from '@mui/icons-material/Brush';
import InfoIcon from '@mui/icons-material/Info';


const navLinks = [
  { label: 'Ring', path: '/ring', icon: <RingVolumeIcon fontSize="small" /> },
  { label: 'Diamond', path: '/diamond', icon: <DiamondIcon fontSize="small" /> },
  { label: 'Earrings', path: '/earrings', icon: <EmojiEmotionsIcon fontSize="small" /> },
  { label: 'Cosmetics', path: '/cosmetics', icon: <BrushIcon fontSize="small" /> },
  { label: 'About Us', path: '/about', icon: <InfoIcon fontSize="small" /> },
];

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
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={logo} alt="AIRA Logo" style={{ height: '30px', marginTop: '5px' }} />
          <Typography variant="h6">AIRA CREATIONS</Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', flexGrow: 1 }}>
          {navLinks.map(({ label, path, icon }) => (
            <Link
              key={label}
              to={path}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {icon}
                {label}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* Contact Info */}
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">9516178888, 7697144980</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2">piyushsoni261199@gmail.com</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


