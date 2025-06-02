// components/HighClassJewelry.jsx
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import chandelierimage from '../assets/chandelier.jpg';
import elegantring from '../assets/elegantring.jpg';
import braclate from '../assets/braclet.jpg';
import earings from '../assets/earings.jpg';

const HighClassJewelry = () => {
  const items = [
    { title: 'Chandelier', image: chandelierimage, price: '$150.00' },
    { title: 'Elegant Ring', image: elegantring, price: '$99.00' },
    { title: 'Classic Bracelet', image: braclate, price: '$130.00' },
    { title: 'Diamond Stud', image: earings, price: '$180.00' },
  ];

  return (
    <Box sx={{ textAlign: 'center', py: 12 }}>
      <Box sx={{ mb: 6, mt: 3 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'red',
            mb: 1,
            // textAlign: 'left',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: 1,
            lineHeight: 1.2,
          }}
        >
          FIND THE PERFECT
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mb: 2,
            // textAlign: 'left',
            fontFamily: "'Playfair Display', serif",
            color: 'white',
            letterSpacing: 1,
            lineHeight: 1.2,
          }}
        >
          HIGH CLASS JEWELLERY
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            mb: 3,
            // textAlign: 'left',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: 1,
            lineHeight: 1.2,
            color: 'red', // added so subtitle matches color styling
          }}
        >
          #Elevate your elegance with timeless pieces
        </Typography>
      </Box>

      <Grid container spacing={13} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={6} md={2} key={index}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#2a2a2a',
                color: 'white',
                border: '1px solid #ddd',
                width: '100%',
                maxWidth: 250,
                boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
                borderRadius: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body1" align="center">{item.title}</Typography>
                <Typography variant="body2" align="center" sx={{ color: 'red' }}>
                  {item.price}
                </Typography>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>


    </Box>

  );
};

export default HighClassJewelry;
