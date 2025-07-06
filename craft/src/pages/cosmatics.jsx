import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  Button,
} from '@mui/material';

import cosmaticss from '../assets/cosmatics1.jpg';
import cosmatics from '../assets/cosmatics2.jpg';
import SendInquiryModal from '../components/enquiryform';

const cosmeticItems = [
  {
    img: cosmaticss,
    title: 'Luxury Lipstick Set',
    price: 349,
    original: 1999,
  },
  {
    img: cosmatics,
    title: 'Complete Skincare Kit',
    price: 549,
    original: 2999,
  },
];

const Cosmetics = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (title) => {
    setSelectedProduct(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ px: 6, py: 6, bgcolor: '#ffffff' }}>
      <Grid container spacing={4} justifyContent="center">
        {cosmeticItems.map((item, index) => (
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
              {/* Image */}
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
                  src={item.img}
                  alt={item.title}
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
                  {item.title}
                </Link>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#000',
                    mb: 2,
                  }}
                >
                  ₹{item.price}
                  <span style={{ textDecoration: 'line-through', color: '#444', marginLeft: 4 }}>
                    ₹{item.original}
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
                    SAVE 85%
                  </span>
                </Typography>

                {/* Inquiry Button */}
                <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleOpen(item.title)}
                  >
                    Send Inquiry
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Inquiry Form Modal */}
      <SendInquiryModal
        open={open}
        onClose={handleClose}
        selectedRing={selectedProduct}
      />
    </Box>
  );
};

export default Cosmetics;
