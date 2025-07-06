import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Necklaxe from '../assets/Necklaxe.webp';
import Earrings from '../assets/EARRINGS.webp';
import Braclets from '../assets/BRACLATES.webp';
import Ringss from '../assets/RINNGS.webp';

const items = [
  {
    label: 'EARRINGS',
    image: Earrings,
    link: 'earrings',
  },
  {
    label: 'NECKLACES',
    image: Necklaxe,
    link: 'necklaces',
  },
  {
    label: 'RINGS',
    image: Ringss,
    link: 'rings',
  },
  {
    label: 'BRACELETS',
    image: Braclets,
    link: 'bracelets',
  },
];

const WhatsNew = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f3f1e8',
        py: 6,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: 'Georgia, serif',
          fontSize: '16px',
          fontWeight: 400,
          mb: 4,
          color: '#000',
          textDecoration: 'underline',
        }}
      >
        What’s New &gt;
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1000, margin: '0 auto' }}
      >
        {items.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx} sx={{ textAlign: 'center' }}>
            <Box
              component={RouterLink}
              to={`/category/${item.link}`} // 👈 navigates to route
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': { opacity: 0.8 },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.label}
                sx={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mb: 1.5,
                }}
              />
              <Typography
                sx={{
                  fontSize: '10px',
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.5px',
                  color: '#000',
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatsNew;
