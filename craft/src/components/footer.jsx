import React from 'react';
import { Box, Typography, Grid, Link, TextField, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn, ArrowForward, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        // border: '1px solid red',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='pink' stroke-width='0.2'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'repeat',
        borderRadius:3,
        px: { xs: 4, md: 20 },
        pt: 8,
        pb: 6,
        color: 'black',
      }}
    >
      <Grid container spacing={6} justifyContent="space-between">
        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight="bold">Quick links</Typography>
          <Box mt={2}>
            {[
              'Customer Reviews',
              'Our Blogs',
              'Store Locator',
              'About Us',
              'Join Us',
            ].map((text, index) => (
              <Link
                key={index}
                href="#"
                underline="none"
                color="black"
                display="block"
                sx={{ mb: 3 }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Info */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight="bold">Info</Typography>
          <Box mt={2}>
            {[
              'Shipping & Returns',
              'Privacy Policy',
              'International Shipping',
              'FAQs & Support',
              'Terms of Service',
            ].map((text, index) => (
              <Link
                key={index}
                href="#"
                underline="none"
                color="black"
                display="block"
                sx={{ mb: 3 }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Us + Newsletter + Social Icons */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" fontWeight="bold">Contact Info</Typography>
          <Box mt={2}>
            <Typography variant="body2" color="black" sx={{ mb: 2 }}>
              Email: aira.creations@outlook.com
            </Typography>
            <Typography variant="body2" color="black" sx={{ mb: 2 }}>
              Phone: +91 9516178888, 7697144980
            </Typography>
            <Typography variant="body2" color="black" >
              Address: Jabalpur, Madhya Pradesh - 482001
            </Typography>

            <Box
              mt={4}
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              gap={2}
            >
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        {/* Left Side: Newsletter Box */}
        <Box
          width={{ xs: '100%', md: '65%' }}
          // border="1px solid red"
          mb={{ xs: 2, md: 0 }}
        >
          <Typography variant="h3" color="black" mb={1} mt={6}>
            Subscribe to our Newsletter
          </Typography>

          <Box display="flex" gap={1} mt={4}>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                flex: 1,
                input: { color: 'black' },
              }}
            />
            <IconButton sx={{ bgcolor: 'black', color: 'white' }}>
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>

        {/* Right Side: Social Icons */}
        <Box
          display="flex"
          justifyContent="flex-end"
          // border="1px solid red" 
          gap={2}
          sx={{ mt:17}}
        >
          <IconButton sx={{ color: 'black' }}><Facebook sx={{ fontSize: 32 }} /></IconButton>
          <IconButton sx={{ color: 'black' }}><Instagram sx={{ fontSize: 32 }} /></IconButton>
          <IconButton sx={{ color: 'black' }}><YouTube sx={{ fontSize: 32 }} /></IconButton>
          <IconButton sx={{ color: 'black' }}><WhatsApp sx={{ fontSize: 32 }} /></IconButton>
        </Box>
      </Box>

      <Box mt={10}textAlign="center">
        <Typography variant="body2" color="black">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );

};

export default Footer;