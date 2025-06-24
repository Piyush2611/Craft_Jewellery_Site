import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

import cosmaticss from '../assets/cosmatics1.jpg';
import cosmatics from '../assets/cosmatics2.jpg';
import SendInquiryModal from '../components/enquiryform';

const Cosmetics = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const description = `Enhance your natural beauty with our premium cosmetics range, crafted for all skin types.
  Our collection includes everything from vibrant lipsticks to nourishing skincare essentials,
  designed to make you feel confident and radiant every day.`;

  const cosmeticsSections = [
    {
      image: cosmaticss,
      title: 'Luxury Lipstick Set',
    },
    {
      image: cosmatics,
      title: 'Complete Skincare Kit',
    },
  ];

  const handleOpen = (title) => {
    setSelectedProduct(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

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
      {cosmeticsSections.map((section, index) => (
        <Box
          key={index}
          sx={{
            mt: index !== 0 ? 7 : 0,
            pb: 5,
            borderBottom: index !== cosmeticsSections.length - 1 ? '1px solid #ddd' : 'none',
            position: 'relative',
          }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* Image */}
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
                  src={section.image}
                  alt={section.title}
                  style={{ maxWidth: '100%', borderRadius: '8px' }}
                />
              </Box>
            </Grid>

            {/* Text */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 }, pr: { md: 2 }, width: '100%', maxWidth: '700px' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 'bold',
                    mb: 3,
                    color: '#222',
                  }}
                >
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 6 }}>
                  {description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="contained" color="primary" onClick={() => handleOpen(section.title)}>
                    Send Inquiry
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}

      {/* Inquiry Form Modal */}
      <SendInquiryModal open={open} onClose={handleClose} selectedRing={selectedProduct} />
    </Box>
  );
};

export default Cosmetics;