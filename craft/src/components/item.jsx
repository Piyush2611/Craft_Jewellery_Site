import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import weddingring from '../assets/weddingring.jpg';
import diamondpendant from '../assets/daimondpendant.jpg';
import WeddingRingPage from '../pages/wedding_ring';
import DiamondPendantPage from '../pages/diamond_pendant';

const categoryData = {
    wedding_ring: WeddingRingPage,
    diamond_pendant: DiamondPendantPage,

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