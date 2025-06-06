import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JewelryHomePage from '../pages/home';
import About from '../pages/about';
import Ring from '../pages/ring';
import Daimond from '../pages/daimonds';
import Earings from '../pages/earings';
import Cosmatics from '../pages/cosmatics';
import CategoryPage from '../components/item';
import Header from '../components/Header';
import Footer from '../components/footer';
import { Box } from '@mui/material';
import Terms from '../pages/terms';
import PrivacyPolicy from '../pages/privacy&policy';

function AppRoute() {
  return (
    <Router>
      {/* Global layout with Header */}
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<JewelryHomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/ring" element={<Ring />} />
          <Route path="/daimond" element={<Daimond />} />
          <Route path="/earings" element={<Earings />} />
          <Route path="/cosmatics" element={<Cosmatics />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
        <Footer />

      </Box>
    </Router>
  );
}

export default AppRoute;
