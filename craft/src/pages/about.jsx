import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to AIRA CREATIONS! We are dedicated to crafting the finest luxury watches, rings, and exclusive designs for our discerning customers.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to combine timeless elegance with innovative craftsmanship, ensuring every piece tells a story of passion, precision, and perfection.
      </Typography>
      <Typography variant="body1" paragraph>
        Founded in 2023, AIRA CREATIONS has quickly become a name synonymous with quality and style. Whether you're looking for a stunning ring or a sophisticated watch, our collections offer something unique for everyone.
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for choosing AIRA CREATIONS. We look forward to helping you find your perfect piece.
      </Typography>
    </Container>
  );
};

export default About;
