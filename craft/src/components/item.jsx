import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import weddingring from '../assets/weddingring.jpg';
import diamondpendant from '../assets/daimondpendant.jpg';
import WeddingRingPage from '../pages/wedding_ring';
import DiamondPendantPage from '../pages/diamond_pendant';
import WeddingearingsPage from '../pages/woman_earring';
import Cosmatics from '../pages/cosmatics';

const categoryData = {
    rings: WeddingRingPage,
    necklaces: DiamondPendantPage,
    earrings:WeddingearingsPage,
    bracelets:Cosmatics
};

const CategoryPage = () => {
  const { categoryName } = useParams();

  const ComponentToRender = categoryData[categoryName];

  if (!ComponentToRender) {
    return <p>Category not found</p>;
  }

  return <ComponentToRender />;
};

export default CategoryPage;