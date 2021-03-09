import { Box, Grid } from '@chakra-ui/react';
import Layout from '../Layout';
import Title from '../Title';
import CategoriesSlider from './CategoriesSlider';

const Categories = () => {
  return (
    <Box as="section">
      <Layout>
        <Grid py={10} gridGap={8}>
          <Title color="black">Категории</Title>

          <Box mt={4}>
            <CategoriesSlider />
          </Box>
        </Grid>
      </Layout>
    </Box>
  );
};

export default Categories;
