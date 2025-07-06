import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Link,
} from '@mui/material';

// Import images
import handring1 from '../assets/handring1.avif';
import handring2 from '../assets/handring2.avif';
import handring3 from '../assets/handring3.avif';
import handring4 from '../assets/handring4.avif';
import handring5 from '../assets/handring5.avif';
import handring6 from '../assets/handring6.avif';
import handring7 from '../assets/handring7.avif';
import handring8 from '../assets/handring8.avif';


const rings = [
  {
    img: handring1,
    title: 'AIRA Anti-Tarnish Hammered Coin Ring (Adjustabl..',
    price: 199,
    original: 2145,
  },
  {
    img: handring2,
    title: 'AIRA Anti-Tarnish Emerald Flower Ring (Adjustabl...',
    price: 199,
    original: 2160,
  },
  {
    img: handring3,
    title: 'AIRA Anti-Tarnish Daffodil Ring (Adjustable Size)',
    price: 199,
    original: 2100,
  },
  {
    img: handring4,
    title: 'AIRA Anti-Tarnish Dazzling Star Ring (Adjustable...',
    price: 199,
    original: 2145,
  },
  {
    img: handring5,
    title: 'AIRA Crystal Heart Ring (Adjustable Size)',
    price: 199,
    original: 2070,
  },
  {
    img: handring6,
    title: 'AIRA Anti-Tarnish Golden Flower Ring (Adjustable...',
    price: 199,
    original: 2095,
  },
  {
    img: handring4, // duplicate just for layout completeness
    title: 'AIRA Alluring Black Crystal Cocktail Ring (Adjusta...',
    price: 199,
    original: 2145,
  },
    {
    img: handring7,
    title: 'AIRA Anti-Tarnish Sun Ring',
    price: 199,
    original: 2110,
  },
  {
    img: handring8,
    title: 'AIRA Anti-Tarnish Wavy Ring',
    price: 199,
    original: 2110,
  },

];

const WeddingRingPage = () => {
  return (
    <Box sx={{ px: 6, py: 6, bgcolor: '#ffffff' }}>
      <Grid container spacing={4} justifyContent="center">
        {rings.map((ring, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                border: '1px solid #eee',
                borderRadius: 2,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Container */}
              <Box
                sx={{
                  width: '100%',
                  height: 260, // fixed image height
                  backgroundColor: '#f9f9f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={ring.img}
                  alt={ring.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ p: 2, flexGrow: 1 }}>
                <Link
                  underline="none"
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'block',
                    color: '#000',
                    mb: 1,
                    '&:hover': { color: '#c79439' },
                  }}
                  href="#"
                >
                  {ring.title}
                </Link>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#000',
                  }}
                >
                  ₹{ring.price}
                  <span style={{ textDecoration: 'line-through', color: '#444', marginLeft: 4 }}>
                    ₹{ring.original}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: '#000',
                      background: '#f3f3f3',
                      fontSize: '10px',
                      padding: '2px 4px',
                      marginLeft: 4,
                      display: 'inline-block',
                      borderRadius: '2px',
                    }}
                  >
                    SAVE 90%
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default WeddingRingPage;
