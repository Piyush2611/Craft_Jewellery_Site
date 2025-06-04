import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JewelryHomePage from '../pages/home';
import About from '../pages/about';
import Ring from '../pages/ring';
import Daimond from '../pages/daimonds';
import Earings from '../pages/earings';
import Cosmatics from '../pages/cosmatics';

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JewelryHomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/daimond" element={<Daimond />} />
        <Route path="/earings" element={<Earings />} />
        <Route path="/cosmatics" element={<Cosmatics />} />
      </Routes>
    </Router>
  );
}

export default AppRoute;
