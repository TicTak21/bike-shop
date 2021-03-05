import { Box, Text } from '@chakra-ui/react';
import Nav from './Nav';
import Layout from './Layout';
import PlainButton from './PlainButton';
import Title from './Title';
import Link from './Link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    }, 8000);

    return () => clearInterval(timer);
  });

  return (
    <Box h="100vh" position="relative">
      <Box position="fixed" zIndex={-1} w="100vw" h="100vh" overflow="hidden">
        <Image
          src={data.images[currentSlide]}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
      <Layout style={{ height: 'inherit', position: 'relative' }}>
        <Nav />

        <Box position="absolute" bottom="20%">
          <Text color="white" fontSize={['xl', 'xl', '2xl', '2xl']} textTransform="uppercase">
            {data.name}
          </Text>
          <Box mt={1}>
            {data.promos.map((p, i) => (
              <Title key={i}>{p}</Title>
            ))}
          </Box>
          <PlainButton type="outline" mt={4} textTransform="uppercase">
            <Link href={data.url}>узнать больше</Link>
          </PlainButton>
        </Box>
      </Layout>
    </Box>
  );
};

export default Header;
