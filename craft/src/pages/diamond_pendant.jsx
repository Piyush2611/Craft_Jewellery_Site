import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import diamondpendant from '../assets/daimondpendant.jpg';

const DiamondPendantPage = () => {
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
              src={diamondpendant}
              alt="Diamond Pendant"
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Grid>

        {/* Right Side: Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 'bold',
              mb: 3,
              color: '#222',
            }}
          >
            Diamond Pendant
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444' }}>
            Discover our elegant collection of diamond pendants, crafted with precision
            and designed to add a touch of brilliance to any outfit. Choose from timeless
            classic designs or modern statement pieces to express your unique style.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiamondPendantPage;
