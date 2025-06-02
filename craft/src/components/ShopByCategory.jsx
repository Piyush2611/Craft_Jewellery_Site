// components/ShopByCategory.jsx
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import womenearing from '../assets/womenearing.jpg';
import weddingring from '../assets/weddingring.jpg';
import diamondpendant from '../assets/daimondpendant.jpg';
import womanearring from '../assets/womenEaring1.jpg';

const ShopByCategory = () => {
  const categories = [
    { title: 'Wedding Ring', image: weddingring },
    { title: 'Diamond Pendant', image: diamondpendant },
    { title: 'Woman Earring', image: womanearring },
  ];
  return (
    <Box
      sx={{
        backgroundColor: '#f8f1e9',
        color: 'black',
        py: 6,
        border: '2px solid black',
        borderRadius: 3,
      }}
    >
      <Container >
        <Grid container spacing={4} alignItems="center">
          <Box
            sx={{
              p: 2,
              backgroundColor: '#222',
              borderRadius: 2,
              border: '1px solid black',
              mr: 20
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box>
                  <img
                    src={womenearing}
                    alt="Earring Woman"
                    style={{ width: '100%', borderRadius: 8 }}
                  />
                </Box>
              </Grid>
              {/* Other Grid items if needed */}
            </Grid>
          </Box>
          <Box>
            <Grid container justifyContent="flex-end">
              <Grid item xs={11} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: 'left',
                    mb: 1,
                    color: 'red',          // add accent color
                    fontWeight: '600',
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    fontSize: '0.85rem'
                  }}
                >
                  PRECIOUS COLLECTION
                </Typography>

                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    textAlign: 'left',
                    mb: 4,
                    fontFamily: "'Playfair Display', serif",  // elegant serif font
                    color: '#222',
                    letterSpacing: 1,
                    lineHeight: 1.2,
                  }}
                >
                  SHOP BY CATEGORY
                </Typography>

                <Grid container spacing={6} justifyContent="flex-start">
                  {categories.map((category, i) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={i}
                      sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Card
                        sx={{
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
                        elevation={0}
                      >
                        <CardMedia
                          component="img"
                          height="120"
                          image={category.image}
                          alt={category.title}
                          sx={{
                            borderRadius: '50%',
                            width: 120,
                            height: 120,
                            objectFit: 'cover',
                            margin: '20px auto 10px auto',
                          }}
                        />

                        <CardContent>
                          <Typography
                            variant="h6"
                            align="center"
                            sx={{
                              fontWeight: 600,
                              color: '#333',
                              letterSpacing: 0.5,
                              fontFamily: "'Playfair Display', serif",
                            }}
                          >
                            {category.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

              </Grid>

            </Grid>
          </Box>


        </Grid>
      </Container>
    </Box>

  );
};

export default ShopByCategory;
