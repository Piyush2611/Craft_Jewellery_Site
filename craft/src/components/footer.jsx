import React from 'react';
import { Box, Typography, Grid, Link, TextField, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn, ArrowForward } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        backgroundImage:
          'url("data:image/svg+xml;utf8,<svg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M0 0 L100 100 M100 0 L0 100\' stroke=\'pink\' stroke-width=\'0.3\'/></svg>")',
        backgroundRepeat: 'repeat',
        p: { xs: 4, md: 8 },
      }}
    >
      <Grid container spacing={4}>
        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">Quick links</Typography>
          <Box mt={2}>
            <Link href="#" underline="none" color="inherit">Customer Reviews</Link><br />
            <Link href="#" underline="none" color="inherit">Our Blogs</Link><br />
            <Link href="#" underline="none" color="inherit">Store Locator</Link><br />
            <Link href="#" underline="none" color="inherit">About Us</Link><br />
            <Link href="#" underline="none" color="inherit">Join Us</Link><br />
            <Link href="#" underline="none" color="inherit">GIVA Gift Cards</Link>
          </Box>
        </Grid>

        {/* Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">Info</Typography>
          <Box mt={2}>
            <Link href="#" underline="none" color="inherit">Shipping & Returns</Link><br />
            <Link href="#" underline="none" color="inherit">Privacy Policy</Link><br />
            <Link href="#" underline="none" color="inherit">International Shipping</Link><br />
            <Link href="#" underline="none" color="inherit">FAQs & Support</Link><br />
            <Link href="#" underline="none" color="inherit">Terms of Service</Link>
          </Box>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold">Contact us</Typography>
          <Box mt={2}>
            <Typography variant="body2">BIS : HM/C - 6290031216</Typography><br />
            <Typography variant="body2">
              For any suggestions, queries or complaints please contact us:
            </Typography>
            <Typography variant="body2" mt={1}>
              Indiejewel Fashions Private Limited<br />
              Third Floor, Magnum Vista, Raghuvanahalli,<br />
              Bangalore 560062
            </Typography>
            <Typography variant="body2" mt={1}>care@giva.co</Typography>
            <Typography variant="body2">9228837724 (10 AM to 6:30 PM)</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Subscription Box */}
      <Box mt={6}>
        <Typography variant="h6" fontWeight="bold">Subscribe for exclusive offers and updates!</Typography>
        <Box
          mt={2}
          sx={{
            maxWidth: 500,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <TextField
            placeholder="Email"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ flex: 1, px: 2, py: 1 }}
          />
          <IconButton sx={{ bgcolor: '#000', color: '#fff', borderRadius: 0 }}>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>

      {/* Social Links */}
      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <IconButton><Facebook /></IconButton>
        <IconButton><Instagram /></IconButton>
        <IconButton><YouTube /></IconButton>
        <IconButton><LinkedIn /></IconButton>
      </Box>

      {/* Copyright */}
      <Box mt={3} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} GIVA. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
