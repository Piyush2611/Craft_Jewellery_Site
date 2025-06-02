// components/HighClassJewelry.jsx
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const HighClassJewelry = () => {
  const items = ['Chandelier Earrings', 'Circular Barbells', 'Cluster Earrings', 'Dangle Earrings'];

  return (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h4">HIGH CLASS JEWELLERY</Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {items.map((title, index) => (
          <Grid item xs={6} md={2} key={index}>
            <Card sx={{ backgroundColor: '#111', color: 'white' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/200x200"
                alt={title}
              />
              <CardContent>
                <Typography variant="body1" align="center">{title}</Typography>
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
