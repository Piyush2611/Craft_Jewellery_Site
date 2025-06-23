import React from 'react';
import { Box, Grid, Typography ,Button } from '@mui/material';
import weddingring from '../assets/weddingring.jpg';
import goldeninfinitering from '../assets/goldeninfinitering.jpg';
import silverinfinitering from '../assets/silverinfinitering.jpg';

const WeddingRingPage = () => {
  const ringSections = [
    {
      image: weddingring,
      title: 'Wedding Ring',
    },
    {
      image: goldeninfinitering,
      title: 'Golden Infinity Ring',
    },
    {
      image: silverinfinitering,
      title: 'Silver Infinity Ring',
    },
  ];

  const description = `Celebrate love with our exclusive collection of wedding rings, crafted
  with timeless elegance and passion. Each ring is a symbol of commitment,
  available in a variety of classic and modern styles. Whether you're
  looking for gold, platinum, or diamond-studded designs, our curated
  selection promises something unique for every couple. Designed to last a
  lifetime, just like your love.`;

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
    {ringSections.map((section, index) => (
      <Box
        key={index}
        sx={{
          mt: index !== 0 ? 7 : 0,
          pb: 5,
          borderBottom: index !== ringSections.length - 1 ? '1px solid #ddd' : 'none',
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
                <Button variant="contained" color="primary">
                  Send Inquiry
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    ))}
  </Box>
);


};

export default WeddingRingPage;

