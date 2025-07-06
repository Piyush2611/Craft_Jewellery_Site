// pages/JewelryHomePage.jsx
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/footer';
import TanishqPopup from '../components/PopUp';
import HeroSection from '../components/HeroSection';
import HighClassJewelry from '../components/HighClassJewelry';
import ShopByCategory from '../components/ShopByCategory';
import AntiTarnish from '../components/intro';
import WhatsNew from '../components/whatsnew';

const JewelryHomePage = () => {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      {/* <Header /> */}
      <HeroSection />
      <HighClassJewelry />
      <AntiTarnish/>
      {/* <ShopByCategory /> */}
      <WhatsNew/>
      {/* <TanishqPopup/> */}
      {/* <Footer/> */}
    </Box>
  );
};

export default JewelryHomePage;