import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import diamondpendant from '../assets/daimondpendant.jpg'; // Note: fix typo if needed
import SendInquiryModal from '../components/enquiryform';

const DiamondPendantPage = () => {
  const [open, setOpen] = useState(false);

  // Description text for diamond pendant (you can update this as needed)
  const description = `Discover our elegant collection of diamond pendants, crafted with precision
    and designed to add a touch of brilliance to any outfit. Choose from timeless
    classic designs or modern statement pieces to express your unique style.`;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Box
        sx={{
          pb: 5,
          borderBottom: '1px solid #ddd',
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
                src={diamondpendant}
                alt="Diamond Pendant"
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
                Diamond Pendant
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#444', mb: 6 }}>
                {description}
              </Typography>

              {/* Send Inquiry Button */}
              <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  Send Inquiry
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Inquiry Form Modal */}
      <SendInquiryModal open={open} onClose={handleClose} selectedRing="Diamond Pendant" />
    </Box>
  );
};

export default DiamondPendantPage;
