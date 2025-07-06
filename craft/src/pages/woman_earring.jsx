import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
} from '@mui/material';

import handearing1 from '../assets/handearing1.avif';
import handearing2 from '../assets/handearing2.avif';
import handearing3 from '../assets/handearing3.avif';
import handearing4 from '../assets/handearing4.avif';
import handearing5 from '../assets/handearing5.avif';
import handearing6 from '../assets/handearing6.avif';
import handearing7 from '../assets/handearing7.avif';
import handearing8 from '../assets/handearing8.avif';
import handearing9 from '../assets/handearing9.avif';

const earrings = [
  {
    img: handearing1,
    title: 'AIRA Elegant Gold Hoop Earrings',
    price: 199,
    original: 2145,
  },
  {
    img: handearing2,
    title: 'AIRA Crystal Drop Earrings',
    price: 199,
    original: 2100,
  },
  {
    img: handearing3,
    title: 'AIRA Minimalist Stud Earrings',
    price: 199,
    original: 2075,
  },
  {
    img: handearing4,
    title: 'AIRA Sparkling Teardrop Earrings',
    price: 199,
    original: 2150,
  },
  {
    img: handearing5,
    title: 'AIRA Floral Diamond Cut Earrings',
    price: 199,
    original: 2120,
  },
  {
    img: handearing6,
    title: 'AIRA Classic Silver Hoops',
    price: 199,
    original: 2090,
  },
  {
    img: handearing7,
    title: 'AIRA Double Circle Earrings',
    price: 199,
    original: 2130,
  },
  {
    img: handearing8,
    title: 'AIRA Long Chain Tassel Earrings',
    price: 199,
    original: 2115,
  },
  {
    img: handearing9,
    title: 'AIRA Statement Gold Studs',
    price: 199,
    original: 2165,
  },
];

const WomenEarringPage = () => {
  return (
    <Box sx={{ px: 6, py: 6, bgcolor: '#ffffff' }}>
      <Grid container spacing={4} justifyContent="center">
        {earrings.map((earring, index) => (
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
                  height: 260,
                  backgroundColor: '#f9f9f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={earring.img}
                  alt={earring.title}
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
                  {earring.title}
                </Link>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#000',
                  }}
                >
                  ₹{earring.price}
                  <span style={{ textDecoration: 'line-through', color: '#444', marginLeft: 4 }}>
                    ₹{earring.original}
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

export default WomenEarringPage;
