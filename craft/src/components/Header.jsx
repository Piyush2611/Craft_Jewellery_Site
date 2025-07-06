import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Link as MuiLink,
  Container,
} from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../assets/logo.jpeg';

const rotatingMessages = [
  '100+ satisfied customers ✅',
  'Proudly made in India 🇮🇳',
  'All users contact us: 9516178888, 7697144980',
  '24/7 Available ⏰',
  'Cash On Delivery (COD) Available ✨',
];

const navLinksLeft = [
  'New Arrivals ✨',
  'Necklaces',
  'Earrings',
  'Rings',
  'Bracelets',
  'Combo',
];

const navLinksRight = [
  '90% SALE ✨',
  'About Us',
  'Affiliate Program',
  'Contact Us',
  'Request Returns',
  'Track Order',
];

const Header = () => {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsgIndex((prevIndex) => (prevIndex + 1) % rotatingMessages.length);
    }, 4000); // rotates every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Rotating Notification Bar */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#f3f1e8',
          textAlign: 'center',
          py: 0.5,
          borderBottom: '1px solid #ddd',
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 500 }}>
          {rotatingMessages[currentMsgIndex]}
        </Typography>
      </Box>

      {/* Main Header */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee',
          height:140
        }}
      >
        <Container maxWidth="xl" sx={{ pt: 2 }}>
          {/* Logo Centered */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ height: 50, objectFit: 'contain' }}
            />
            
          </Box>
          
          {/* Unified Navigation Row */}
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2,
              pb: 2,
            }}
          >
            {[...navLinksLeft, ...navLinksRight].map((text, idx) => (
              <MuiLink
                key={idx}
                href="#"
                underline="none"
                sx={{ color: '#111', fontSize: '14px', fontWeight: 500,mb:2 }}
              >
                {text}
              </MuiLink>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
