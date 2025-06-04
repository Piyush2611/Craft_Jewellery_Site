// components/HeroSection.jsx
import { Box, Grid, Typography, Button } from '@mui/material';
import HeroSectionimag from '../assets/HeroSectionimag.png';

const HeroSection = () => {
    return (
        <Box>
            <Box sx={{
                flex: 1,
                display: 'flex',
                pt: 4,
            }}>
                <Box
                    sx={{
                        width: '58%',
                        height: { xs: 'auto', md: '60vh' },
                        overflow: 'hidden',
                        display: 'flex',
                    }}
                >
                    <img
                        src={HeroSectionimag}
                        alt="Jewelry"
                        style={{
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        p: 4,
                        maxWidth: 400,
                        mx: 'auto',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        gutterBottom
                        sx={{
                            marginTop: '5px',
                            marginBottom: '40px',
                            fontSize: '40px',
                            fontFamily: "'Playfair Display', serif",
                        }}
                    >
                        <Box component="span" sx={{ color: 'red' }}>AIRA CREATIONS</Box>
                    </Typography>


                    <Typography
                        variant="body1"
                        sx={{
                            marginTop: '5px',
                            lineHeight: 1.8,
                            fontSize: '18px',
                            fontFamily: "'Playfair Display', serif",
                        }}
                    >
                        Elevate your style with our exclusive collection of handcrafted necklaces and rings. Each piece is designed to reflect timeless elegance, blending modern sophistication with classic beauty. Whether for a special occasion or everyday luxury, our jewelry brings brilliance and meaning to every moment.
                    </Typography>

                </Box>



            </Box>
        </Box>
    );
};

export default HeroSection;

