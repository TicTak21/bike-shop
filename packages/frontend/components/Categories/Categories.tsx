import { Box, Grid } from '@chakra-ui/react';
import Layout from '../Layout';
import Title from '../Title';
import Image from 'next/image';

const Categories = () => {
  const data = [
    { category: 'road series', bg: '/img/Categories/Categories-Slider-1.png', image: '' },
    { category: 'street series', bg: '/img/Categories/Categories-Slider-1.png', image: '' },
    { category: 'mountain series', bg: '/img/Categories/Categories-Slider-1.png', image: '' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
        </Grid>
      </Layout>
    </Box>
  );
};

export default Categories;
