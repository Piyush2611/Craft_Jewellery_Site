import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Necklaxe from '../assets/Necklaxe.webp';
import Earrings from '../assets/EARRINGS.webp';
import Braclets from '../assets/BRACLATES.webp';
import Ringss from '../assets/RINNGS.webp';

const items = [
  {
    label: 'EARRINGS',
    image: Earrings,
  },
  {
    label: 'NECKLACES',
    image: Necklaxe,
  },
  {
    label: 'RINGS',
    image: Ringss,
  },
  {
    label: 'BRACELETS',
    image: Braclets,
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatsNew;
