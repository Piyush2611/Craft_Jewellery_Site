// components/ShopByCategory.jsx
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const ShopByCategory = () => {
  const categories = ['Wedding Ring', 'Diamond Pendant', 'Woman Earring'];

  return (
    <Box sx={{ backgroundColor: '#f8f1e9', color: 'black', py: 6 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/400x400"
              alt="Earring Woman"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>PRECIOUS COLLECTION</Typography>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              SHOP BY CATEGORY
            </Typography>
            <Grid container spacing={2}>
              {categories.map((category, i) => (
                <Grid item xs={4} key={i}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="100"
                      image="https://via.placeholder.com/150"
                      alt={category}
                    />
                    <CardContent>
                      <Typography variant="body2" align="center">{category}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ShopByCategory;
