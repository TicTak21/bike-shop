import { Box, Text } from '@chakra-ui/react';
import { Link } from 'components/_shared';
import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from './CategoriesSlider.module.css';

const CategoriesSlider = () => {
  const data = [
    {
      category: 'road series',
      bg: '/img/Categories/Categories-Slider-1.png',
      image: '/img/Categories/Categories-Slider-Bike-1.png',
    },
    {
      category: 'street series',
      bg: '/img/Categories/Categories-Slider-2.png',
      image: '/img/Categories/Categories-Slider-Bike-1.png',
    },
    {
      category: 'mountain series',
      bg: '/img/Categories/Categories-Slider-3.png',
      image: '/img/Categories/Categories-Slider-Bike-1.png',
    },
  ];

  const settings = {
    bullets: false,
    transitionDelay: 400,
  };

  return (
    <AwesomeSlider {...settings} className={styles.slider}>
      {data.map(({ bg, category, image }, i) => (
        <Box data-src={bg} key={i} position="relative">
          <Box
            zIndex={99}
            color="white"
            position="absolute"
            fontSize="xl"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
          >
            <Image src={image} width="320px" height="150px" />
            <Text
              textTransform="uppercase"
              fontWeight="700"
              fontSize="3xl"
              className={styles.stroke}
            >
              <Link
                href={`/categories/${category}`}
                borderBottom="2px solid transparent"
                style={{ textDecoration: 'none' }}
                _hover={{ borderBottom: '2px solid white' }}
              >
                {category}
              </Link>
            </Text>
          </Box>
        </Box>
      ))}
    </AwesomeSlider>
  );
};

export default CategoriesSlider;
