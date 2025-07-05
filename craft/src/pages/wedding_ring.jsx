import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

import weddingring from '../assets/weddingring.jpg';
import goldeninfinitering from '../assets/goldeninfinitering.jpg';
import silverinfinitering from '../assets/silverinfinitering.jpg';
import SendInquiryModal from '../components/enquiryform';

const WeddingRingPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedRing, setSelectedRing] = useState(null);

  const ringSections = [
    {
      image: weddingring,
      title: 'Wedding Ring',
      price: 199,
      originalPrice: 2175,
    },
    {
      image: goldeninfinitering,
      title: 'Golden Infinity Ring',
      price: 199,
      originalPrice: 2099,
    },
    {
      image: silverinfinitering,
      title: 'Silver Infinity Ring',
      price: 199,
      originalPrice: 2145,
    },
  ];

  const handleOpen = (ringTitle) => {
    setSelectedRing(ringTitle);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRing(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fffaf5',
        px: { xs: 4, md: 10 },
        py: 8,
        color: 'black',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}>
        90% OFF SALE 💫 Hurry! Anti-Tarnish Jewellery
      </Typography>

      <Grid container spacing={4}>
        {ringSections.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 500, fontSize: '0.95rem', mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'black' }}>
                  ₹{item.price.toLocaleString()}{' '}
                  <s style={{ color: '#999', marginLeft: '8px' }}>
                    ₹{item.originalPrice.toLocaleString()}
                  </s>
                  <span style={{ color: 'green', marginLeft: '8px' }}>SAVE 90%</span>
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => handleOpen(item.title)}
                >
                  Send Inquiry
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Inquiry Form Modal */}
      <SendInquiryModal open={open} onClose={handleClose} selectedRing={selectedRing} />
    </Box>
  );
};

export default WeddingRingPage;
