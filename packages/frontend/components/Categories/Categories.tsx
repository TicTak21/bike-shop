import { Box, Grid, Flex, Button } from '@chakra-ui/react';
import Layout from '../Layout';
import Title from '../Title';
import Image from 'next/image';

const Categories = () => {
  const data = [
    { category: 'road series', bg: '/img/Categories/Categories-Slider-1.png', image: '' },
    { category: 'street series', bg: '/img/Categories/Categories-Slider-1.png', image: '' },
    { category: 'mountain series', bg: '/img/Categories/Categories-Slider-1.png', image: '' },
  ];

  return (
    <Box as="section">
      <Box position="absolute" zIndex={-1} w="100vw" h="100vh">
        <Image src="/img/Categories/Categories-1.png" alt="" layout="fill" objectFit="cover" />
      </Box>
      <Layout>
        <Grid py={10} gridGap={8}>
          <Title color="black">Категории</Title>

          {/* <Box w="100%" h="320px" position="relative">
            <Flex
              position="absolute"
              alignItems="center"
              zIndex={2}
              w="100%"
              h="inherit"
              justifyContent="space-between"
            >
              <Button>x</Button>
              <Button>x</Button>
            </Flex>

            <Flex justifyContent="space-between">
              {data.map((el) => {
                <Image src={el.bg} width="100px" height="100px" />;
              })}
            </Flex>
          </Box> */}
        </Grid>
      </Layout>
    </Box>
  );
};

export default Categories;
