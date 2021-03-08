import { Box, Grid } from '@chakra-ui/react';
import Layout from '../Layout';
import Title from '../Title';
import Image from 'next/image';
import CategoriesSlider from './CategoriesSlider';

const Categories = () => {
  return (
    <Box as="section" h="100vh" position="relative">
      <Box position="absolute" zIndex={-1} w="100vw" h="100vh">
        <Image
          src="/img/Categories/Categories-1.png"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
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
