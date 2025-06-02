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
      {/* Headings Section */}
      <Box sx={{ mb: 6, mt: 3 }}>
        <Typography variant="subtitle2" sx={{ color: 'red', mb: 1 }}>
          FIND THE PERFECT
        </Typography>

        <Typography variant="h3" sx={{ mb: 2}}>
          HIGH CLASS JEWELLERY
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 3 }}>
          Elevate your elegance with timeless pieces
        </Typography>
      </Box>

      <Grid container spacing={13} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={6} md={2} key={index}>
            <Card sx={{ backgroundColor: '#2a2a2a', color: 'white' }}>
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
