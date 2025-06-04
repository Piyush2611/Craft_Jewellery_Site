import React from 'react';
import { Box, Typography, Grid, Link, TextField, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn, ArrowForward } from '@mui/icons-material';

const Footer = () => {
  return (
  <Box
    sx={{
      backgroundColor: '#f9f9f9',
      border: '1px solid red',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='pink' stroke-width='0.2'/%3E%3C/svg%3E\")",
      backgroundRepeat: 'repeat',
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
            'GIVA Gift Cards',
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
        <Typography variant="h6" fontWeight="bold">Contact us</Typography>
        <Box mt={2}>
          <Typography variant="body2" color="black" sx={{ mb: 2 }}>
            BIS : HM/C - 6290031216
          </Typography>
          <Typography variant="body2" color="black" sx={{ mb: 2 }}>
            Email: support@example.com
          </Typography>
          <Typography variant="body2" color="black" sx={{ mb: 3 }}>
            Phone: +91 9876543210
          </Typography>

          {/* Newsletter and Icons in one row */}
          <Box
            mt={4}
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            {/* Newsletter Section */}
           

            {/* Social Media Icons */}
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <IconButton sx={{ color: 'black' }}><Facebook /></IconButton>
              <IconButton sx={{ color: 'black' }}><Instagram /></IconButton>
              <IconButton sx={{ color: 'black' }}><YouTube /></IconButton>
              <IconButton sx={{ color: 'black' }}><LinkedIn /></IconButton>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
     <Box width={{ xs: '100%', md: '65%', }}>
              <Typography variant="body2" fontWeight="bold" color="black" mb={1}>
                Subscribe to our Newsletter
              </Typography>
              <Box display="flex" gap={1}>
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
    {/* Footer Bottom */}
    <Box mt={6} textAlign="center">
      <Typography variant="body2" color="black">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  </Box>
);

};

export default Footer;