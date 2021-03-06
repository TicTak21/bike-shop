import { Box, Text } from '@chakra-ui/react';
import Nav from '../Nav';
import Layout from '../Layout';
import PlainButton from '../PlainButton';
import Title from '../Title';
import Link from '../Link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const data = [
    {
      name: 'streetster nathan',
      url: '/streetster nathan',
      image: '/img/Header/Header-1.png',
      promos: ['Удобный и быстрый', 'Твой идеал для покорения города'],
    },
    {
      name: 'streetster offroad',
      url: '/streetster offroad',
      image: '/img/Header/Header-2.png',
      promos: ['Твой выбор для бездорожья'],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentItem + 1 >= data.length) {
        setCurrentItem(0);
        return;
      }

      setCurrentItem(currentItem + 1);
    }, 8000);

    return () => clearInterval(timer);
  });

  return (
    <Box as="header" h="100vh" position="relative">
      <Box position="absolute" zIndex={-1} w="100vw" h="100vh">
        <Image src={data[currentItem].image} alt="" layout="fill" objectFit="cover" quality={100} />
      </Box>
      <Layout>
        <Nav />

        <Box position="absolute" bottom="10%">
          <Text color="white" fontSize={['xl', 'xl', '2xl', '2xl']} textTransform="uppercase">
            {data[currentItem].name}
          </Text>
          <Box mt={1}>
            {data[currentItem].promos.map((p, i) => (
              <Title key={i}>{p}</Title>
            ))}
          </Box>

          <Link href={data[currentItem].url}>
            <PlainButton type="outline" mt={4} textTransform="uppercase">
              узнать больше
            </PlainButton>
          </Link>
        </Box>
      </Layout>
    </Box>
  );
};

export default Header;
