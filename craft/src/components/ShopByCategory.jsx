// components/ShopByCategory.jsx
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent ,  IconButton} from '@mui/material';
import { useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import womenearing from '../assets/womenearing.jpg';
import weddingring from '../assets/weddingring.jpg';
import diamondpendant from '../assets/daimondpendant.jpg';
import womanearring from '../assets/womenEaring1.jpg';
import cosmatics from '../assets/cosmatics.jpg'

const ShopByCategory = () => {
  const scrollRef = useRef();
  const categories = [
    { title: 'Wedding Ring', image: weddingring },
    { title: 'Diamond Pendant', image: diamondpendant },
    { title: 'Woman Earring', image: womanearring },
    { title: 'Cosmetics', image: cosmatics },
  ];

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 270, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f8f1e9',
        color: 'black',
        py:4,
        border: '2px solid black',
        borderRadius: 3,
      }}
    >
      <Box sx={{m:5, ml:25}}>


        {/* Image + Cards Layout */}
        <Grid container spacing={6}>
          {/* Left: Image */}
          
            <Box
              sx={{
                p: 2,
                backgroundColor: '#222',
                borderRadius: 2,
                border: '1px solid black',
              }}
            >
              <img
                src={womenearing}
                alt="Earring Woman"
                style={{ width: '100%', borderRadius: 8 }}
              />
            </Box>
          

          {/* Right: Scrollable cards */}
          <Grid item xs={12} md={6} >
            <Typography
          variant="subtitle2"
          sx={{
            textAlign: 'left',
            mb: 1,
            color: 'red',
            fontWeight: '600',
            letterSpacing: 2,
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            ml:5
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
            fontFamily: "'Playfair Display', serif",
            color: '#222',
            letterSpacing: 1,
            lineHeight: 1.2,
            ml:5
          }}
        >
          SHOP BY CATEGORY
        </Typography>
            <Box sx={{ position: 'relative' }}>
              <Box
                ref={scrollRef}
                sx={{
                  display: 'flex',
                  overflowX: categories.length > 3 ? 'auto' : 'visible',
                  gap: 3,
                  scrollSnapType: categories.length > 3 ? 'x mandatory' : 'none',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { display: 'none' },
                  pr: 5,
                }}
              >
                {categories.map((category, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: '0 0 auto',
                      scrollSnapAlign: 'start',
                      width: '100%',
                      maxWidth: 270,
                    }}
                  >
                    <Card
                      sx={{
                        border: '1px solid #ddd',
                        width: '100%',
                        boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
                        borderRadius: 3,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                        },
                        ml:4
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
                  </Box>
                ))}
              </Box>

              {/* Right Scroll Button */}
              {categories.length > 3 && (
                <IconButton
                  onClick={handleScrollRight}
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    zIndex: 1,
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ShopByCategory;

