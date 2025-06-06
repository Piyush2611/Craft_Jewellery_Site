import React from 'react';
import { Box, Typography, Grid, Link, TextField, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn, ArrowForward, WhatsApp } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    // { label: 'Customer Reviews', path: '/reviews' },
    { label: 'Our Blogs', path: '/blogs' },
    // { label: 'Store Locator', path: '/store-locator' },
    { label: 'About Us', path: '/about' },
    { label: 'Join Us', path: '/join' },
  ];

  const infoLinks = [
    { label: 'Shipping & Returns', path: '/shipping-returns' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    // { label: 'International Shipping', path: '/international-shipping' },
    // { label: 'FAQs & Support', path: '/faqs' },
    { label: 'Terms of Service', path: '/terms' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='pink' stroke-width='0.2'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat',
        borderRadius: 3,
        // border:'5px solid red',
        px: { xs: 4, md: 20 },
        pt: 8,
        // pb: 6,
        color: 'black',
      }}
    >
      <Grid container spacing={6} justifyContent="space-between">
        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight="bold">Quick links</Typography>
          <Box mt={2}>
            {quickLinks.map(({ label, path }, index) => (
              <Link
                key={index}
                component={RouterLink}
                to={path}
                underline="none"
                color="black"
                display="block"
                sx={{ mb: 3 }}
              >
                {label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Info */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight="bold">Info</Typography>
          <Box mt={2}>
            {infoLinks.map(({ label, path }, index) => (
              <Link
                key={index}
                component={RouterLink}
                to={path}
                underline="none"
                color="black"
                display="block"
                sx={{ mb: 3 }}
              >
                {label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight="bold">Contact Info</Typography>
          <Box mt={2}>
            <Typography variant="body2" color="black" sx={{ mb: 2 }}>
              Email: aira.creations@outlook.com
            </Typography>
            <Typography variant="body2" color="black" sx={{ mb: 2 }}>
              Phone: +91 9516178888, 7697144980
            </Typography>
            <Typography variant="body2" color="black">
              Address: Jabalpur, Madhya Pradesh - 482001
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Newsletter and Social Icons */}
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        {/* Newsletter */}
        <Box width={{ xs: '100%', md: '65%' }} mb={{ xs: 2, md: 0 }}>
          <Typography variant="h3" color="black" mb={1} mt={6} >
            Subscribe to our Newsletter
          </Typography>
          <Box display="flex" gap={1} mt={4} width={'600px'}>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="medium"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                flex: 1,
                // height:'50px',
                input: { color: 'black' },
              }}
            />
            <IconButton sx={{ bgcolor: 'black', color: 'white',width:'50px',height:'50px' ,ml:2,mt:0.5}}>
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>

        {/* Social Icons */}
        <Box display="flex" justifyContent="flex-end" gap={2} sx={{ mt: 17 }}>
          <IconButton sx={{ color: 'black' }}><Facebook sx={{ fontSize: 32 }} /></IconButton>
          <IconButton sx={{ color: 'black' }}><Instagram sx={{ fontSize: 32 }} /></IconButton>
          <IconButton sx={{ color: 'black' }}><YouTube sx={{ fontSize: 32 }} /></IconButton>
          <IconButton sx={{ color: 'black' }}><WhatsApp sx={{ fontSize: 32 }} /></IconButton>
        </Box>
      </Box>

      {/* Copyright */}
      <Box pt={5} textAlign="center">
        <Typography variant="body2" color="black">
          © {new Date().getFullYear()} Aira Creations. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;