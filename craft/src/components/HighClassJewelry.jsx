// components/HighClassJewelry.jsx
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import chandelierimage from '../assets/chandelier.jpg';
import elegantring from '../assets/elegantring.jpg';
import braclate from '../assets/braclet.jpg';
import earings from '../assets/earings.jpg';

const HighClassJewelry = () => {
  const items = [
    { title: 'Chandelier', image: chandelierimage },
    { title: 'Elegant Ring', image: elegantring },
    { title: 'Classic Bracelet', image: braclate },
    { title: 'Dangle Earings', image: earings },
  ];
  return (
    <Box sx={{ textAlign: 'center', py: 6}}>
      {/* Headings Section */}
      <Box sx={{ mb: 6, mt: 3 }}>
        <Typography variant="subtitle2" sx={{ color: 'red', mb: 1 }}>
          FIND THE PERFECT
        </Typography>

        <Typography variant="h3" sx={{ mb: 2 }}>
          HIGH CLASS JEWELLERY
        </Typography>

        <Typography variant="subtitle2">
          Elevate your elegance with timeless pieces
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={6} md={2} key={index}>
            <Card sx={{ backgroundColor: '#111', color: 'white' }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="body1" align="center">{item.title}</Typography>
                <Typography variant="body2" align="center" sx={{ color: 'red' }}>
                  $125.00 – $145.00
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
