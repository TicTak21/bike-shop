import { Box, Text } from '@chakra-ui/react';
import Nav from './Nav';
import Layout from './Layout';
import PlainButton from './PlainButton';
import Title from './Title';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = {
    name: 'streetster nathan',
    url: '/',
    images: ['/img/Header/Header-1.png', '/img/Header/Header-2.png'],
    promos: ['Удобный и быстрый', 'Твой идеал для покорения города'],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlide + 1 >= data.images.length) {
        setCurrentSlide(0);
        return;
      }

      setCurrentSlide(currentSlide + 1);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <Box
      h="100vh"
      bgImage={`url(${data.images[currentSlide]})`}
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Layout style={{ height: 'inherit', position: 'relative' }}>
        <Nav />

        <Box position="absolute" bottom="20%">
          <Text color="white" fontSize={['xl', 'xl', '2xl', '2xl']} textTransform="uppercase">
            {data.name}
          </Text>
          <Box mt="10px">
            {data.promos.map((p, i) => (
              <Title key={i}>{p}</Title>
            ))}
          </Box>
          <PlainButton type="outline" mt="25px" textTransform="uppercase">
            <Link href={data.url}>узнать больше</Link>
          </PlainButton>
        </Box>
      </Layout>
    </Box>
  );
};

export default Header;
