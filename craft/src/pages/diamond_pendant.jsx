import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import diamondpendant from '../assets/daimondpendant.jpg';
import necklace from '../assets/necklace_1.jpg';
import pendent from '../assets/daimondpendantnecklace.jpg';
import SendInquiryModal from '../components/enquiryform';

const DiamondPendantPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedPendant, setSelectedPendant] = useState(null);

  const description = `Discover our elegant collection of diamond pendants, crafted with precision
    and designed to add a touch of brilliance to any outfit. Choose from timeless
    classic designs or modern statement pieces to express your unique style.`;

  const pendantSections = [
    {
      image: necklace,
      title: 'Diamond Necklace',
    },
    {
      image: pendent,
      title: 'Diamond Pendant Necklace',
    },
  ];

  const handleOpen = (pendantTitle) => {
    setSelectedPendant(pendantTitle);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPendant(null);
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
      {pendantSections.map((section, index) => (
        <Box
          key={index}
          sx={{
            mt: index !== 0 ? 7 : 0,
            pb: 5,
            borderBottom: index !== pendantSections.length - 1 ? '1px solid #ddd' : 'none',
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
        selectedRing={selectedPendant}
      />
    </Box>
  );
};

export default DiamondPendantPage;

