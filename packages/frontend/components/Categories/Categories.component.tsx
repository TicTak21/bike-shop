import { Box, Grid } from '@chakra-ui/react';
import { Layout, Title } from 'components/_shared';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider.component';

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
