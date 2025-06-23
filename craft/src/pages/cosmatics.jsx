import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import cosmeticsImage from '../assets/cosmatics.jpg'; // Update with your image path
import SendInquiryModal from '../components/enquiryform';

const Cosmetics = () => {
  const [open, setOpen] = useState(false);

  const description = `Enhance your natural beauty with our premium cosmetics range, crafted for all skin types.
  Our collection includes everything from vibrant lipsticks to nourishing skincare essentials,
  designed to make you feel confident and radiant every day.`;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        backgroundColor: '#fffaf5',
        px: { xs: 4, md: 20 },
        py: 8,
        minHeight: '80vh',
        color: 'black',
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left Side: Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: '#f8f1e9',
              border: '1px solid #ccc',
              textAlign: 'center',
            }}
          >
            <img
              src={cosmeticsImage}
              alt="Cosmetics"
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Grid>

        {/* Right Side: Content */}
        <Grid item xs={12} md={6}>
<Box sx={{ pl: { md: 4 }, pr: { md: 2 }, width: '100%', maxWidth: "700px" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 'bold',
                mb: 3,
                color: '#222',
              }}
            >
              Cosmetics
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 6 }}>
              {description}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Send Inquiry
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Inquiry Form Modal */}
      <SendInquiryModal open={open} onClose={handleClose} selectedRing="Cosmetics" />
    </Box>
  );
};

export default Cosmetics;
