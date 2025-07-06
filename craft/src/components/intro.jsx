import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AntiTarnish = () => {
  return (
  <Box
    sx={{
      backgroundColor: '#f3f1e8',
      textAlign: 'center',
      py: 8,
      px: 2,
      fontFamily: 'inherit', // ✅ Inherit font from parent
      color: '#000',
    }}
  >
  <Typography
  sx={{
    fontSize: '16px', // ✅ Updated from 12px to 16px
    mb: 1,
    fontFamily: 'inherit', // ✅ Uses Futura with fallback to sans-serif
  }}
>
  Styled By Reema Singh Gautam
</Typography>


    <Typography
      variant="h4"
      sx={{
        fontWeight: 400,
        fontSize: '32px',
        fontFamily: 'inherit', // ✅
      }}
    >
      Anti-Tarnish Jewellery
    </Typography>

    <Typography
      sx={{
        fontSize: '14px',
        fontWeight: 'bolder',
        mt: 2,
        mb: 3,
        fontFamily: 'inherit', // ✅
      }}
    >
      Proudly Made in India 🇮🇳
    </Typography>

    <Button
      variant="contained"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        px: 4,
        py: 1.5,
        fontSize: '14px',
        borderRadius: 0,
        fontFamily: 'inherit', // ✅ Optional for consistent button text
        '&:hover': {
          backgroundColor: '#222',
        },
      }}
    >
      SHOP NOW
    </Button>
  </Box>
);
};

export default AntiTarnish;
