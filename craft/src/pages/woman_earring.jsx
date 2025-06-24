import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import womenEarring from '../assets/womenearing.jpg';
import earingss from '../assets/earing1.jpg';
import earings from '../assets/earings2.jpg';
import SendInquiryModal from '../components/enquiryform';

const WomenEarringPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedEarring, setSelectedEarring] = useState(null);

  const description = `Explore our exquisite collection of women's earrings, designed to enhance every occasion.
  From elegant studs to dazzling chandeliers, our selection offers a variety of styles to
  complement your unique personality and fashion sense. Crafted with precision and care,
  each piece reflects timeless beauty and quality.`;

  const earringSections = [
    {
      image: earingss,
      title: 'Elegant Stud Earrings',
    },
    {
      image: earings,
      title: 'Chandelier Drop Earrings',
    },
  ];

  const handleOpen = (title) => {
    setSelectedEarring(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEarring(null);
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
      {earringSections.map((section, index) => (
        <Box
          key={index}
          sx={{
            mt: index !== 0 ? 7 : 0,
            pb: 5,
            borderBottom: index !== earringSections.length - 1 ? '1px solid #ddd' : 'none',
            position: 'relative',
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            {/* Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: '#f8f1e9',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  style={{
                    maxWidth: '100%',
                    borderRadius: '8px',
                    height: 'auto',
                  }}
                />
              </Box>
            </Grid>

            {/* Text */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  pl: { md: 4 },
                  pr: { md: 2 },
                  width: '800px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100%',
                }}
              >
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

                {/* Send Inquiry Button */}
                <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
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
      <SendInquiryModal
        open={open}
        onClose={handleClose}
        selectedRing={selectedEarring}
      />
    </Box>
  );
};

export default WomenEarringPage;
