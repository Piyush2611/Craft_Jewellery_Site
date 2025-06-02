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
                        border: '1px solid red',
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

                <Box sx={{ p: 4, mr: 12, ml: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Welcome to Our Store
                    </Typography>
                    <Typography variant="body1">
                        Explore our exclusive collection of necklaces and rings.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;

