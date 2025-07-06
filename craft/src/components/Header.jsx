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
import { Link, useLocation } from 'react-router-dom';
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

export const navLinksLeft = [
  { label: 'New Arrivals ✨', path: '/' },
  { label: 'Necklaces', path: '/category/necklaces' },
  { label: 'Earrings', path: '/category/earrings' },   // <== updated path here
  { label: 'Rings', path: '/category/rings' },
  { label: 'Bracelets', path: '/category/bracelets' },
  // { label: 'Combo', path: '/category/combo' },
];

export const navLinksRight = [
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Terms', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
];


const Header = () => {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsgIndex((prevIndex) => (prevIndex + 1) % rotatingMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Combine nav links into an array of objects with label and path
  const navLinks = [
    ...navLinksLeft,
    ...navLinksRight,
  ];

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
          height: 140,
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
            {navLinks.map(({ label, path }, idx) => (
              <MuiLink
                key={idx}
                component={Link}
                to={path}
                underline="none"
                sx={{
                  color: location.pathname === path ? '#c79439' : '#111',
                  fontSize: '14px',
                  fontWeight: 500,
                  mb: 2,
                  '&:hover': { color: '#c79439' },
                }}
              >
                {label}
              </MuiLink>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;

