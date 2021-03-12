import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Layout } from 'components/_shared';
import Image from 'next/image';

const MainPromo2 = () => {
  const data = [
    {
      title: 'Простота обсуживания',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: '/img/Promo/MainPromo2-1.svg',
    },
    {
      title: 'Надежная конструкция',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: '/img/Promo/MainPromo2-2.svg',
    },
    {
      title: 'Качественные детали',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: '/img/Promo/MainPromo2-3.svg',
    },
  ];

  return (
    <Box as="section">
      <Box position="relative">
        <Box position="absolute" zIndex={-1} w="100vw" h="100%">
          <Image src="/img/Bg/Bg-2.png" alt="" layout="fill" objectFit="cover" quality={100} />
        </Box>

        <Layout>
          <Text fontWeight="700" fontSize="3xl" textAlign="center">
            Велосипеды Streetster это...
          </Text>

          <SimpleGrid
            columns={[1, , , 3]}
            justifyItems="center"
            mt={[10, , , 20]}
            gridGap={8}
            h="300px"
          >
            {data.map((el, i) => (
              <Flex
                key={i}
                flexDirection="column"
                bg="white.200"
                p={4}
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                position="relative"
              >
                <Box
                  position="absolute"
                  top="0"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  display={['none', , 'block']}
                >
                  <Image src={el.image} width="133px" height="133px" quality={100} />
                </Box>
                <Text fontSize="xl" fontWeight="700">
                  {el.title}
                </Text>
                <Text>{el.desc}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Layout>
      </Box>
    </Box>
  );
};

export default MainPromo2;
