import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JewelryHomePage from '../pages/home';
import About from '../pages/about';
// import Watch from './pages/Watch';
// import Ring from './pages/Ring';
// import Pages from './pages/Pages';
// import Contact from './pages/Contact';

function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JewelryHomePage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/watch" element={<Watch />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRoute;
