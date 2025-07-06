import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Link,
  Button,
} from '@mui/material';

import necklace from '../assets/necklace_1.jpg';
import pendent from '../assets/daimondpendantnecklace.jpg';
import SendInquiryModal from '../components/enquiryform';

const pendants = [
  {
    img: necklace,
    title: 'AIRA Classic Diamond Necklace',
    price: 499,
    original: 3499,
  },
  {
    img: pendent,
    title: 'AIRA Pendant Diamond Chain',
    price: 449,
    original: 3299,
  },
];

const DiamondPendantPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedPendant, setSelectedPendant] = useState(null);

  const handleOpen = (title) => {
    setSelectedPendant(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPendant(null);
  };

  return (
    <Box sx={{ px: 6, py: 6, bgcolor: '#ffffff' }}>
      <Grid container spacing={4} justifyContent="center">
        {pendants.map((pendant, index) => (
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
                  src={pendant.img}
                  alt={pendant.title}
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
                  {pendant.title}
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
                  ₹{pendant.price}
                  <span style={{ textDecoration: 'line-through', color: '#444', marginLeft: 4 }}>
                    ₹{pendant.original}
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

                {/* Inquiry Button */}
                <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => handleOpen(pendant.title)}
                  >
                    Send Inquiry
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Inquiry Modal */}
      <SendInquiryModal
        open={open}
        onClose={handleClose}
        selectedRing={selectedPendant}
      />
    </Box>
  );
};

export default DiamondPendantPage;
