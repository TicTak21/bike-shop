import { Box, Flex, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import { Layout, Link, Title } from 'components/_shared';
import Image from 'next/image';
import { RightArrowIcon } from 'public/icons/Arrow/RightArrow';

const Best = () => {
  const data = {
    big: {
      name: 'streetster bakerstreet',
      desc: 'скорость соедененная с удобством',
      image: '/img/Best/Best-Big-1.png',
    },
    small: [
      { image: '/img/Best/Best-Small-1.png', name: 'Шлем Octane' },
      { image: '/img/Best/Best-Small-2.png', name: 'Защита Canyon' },
      { image: '/img/Best/Best-Small-1.png', name: 'Шлем Octane' },
      { image: '/img/Best/Best-Small-2.png', name: 'Защита Canyon' },
    ],
  };

  return (
    <Box as="section" pb={4}>
      <Layout>
        <Title color="black">Избранные товары</Title>
        <SimpleGrid
          gridGap={4}
          columns={[1, , , 2]}
          justifyContent="space-between"
          mt={8}
          minH="450px"
        >
          <Box
            position="relative"
            bgImage={`url(${data.big.image})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            h="450px"
            transition="0.3s ease-in-out"
            _hover={{ transform: 'scale(1.03)' }}
          >
            <Box
              position="absolute"
              w="100%"
              top="0"
              left="0"
              color="white"
              p={6}
              zIndex={2}
              textAlign="right"
            >
              <Text textTransform="uppercase" fontWeight="700" fontSize="2xl">
                {data.big.name}
              </Text>
              <Text>{data.big.desc}</Text>
            </Box>

            <Box
              position="absolute"
              w="100%"
              top="60%"
              left="0"
              color="white"
              p={6}
              zIndex={2}
              textAlign="right"
            >
              <Link href={`/${data.big.name}`}>
                <IconButton
                  color="white"
                  variant="link"
                  aria-label="Right arrow"
                  icon={<RightArrowIcon boxSize={6} />}
                  _hover={{ transform: 'scale(1.2)' }}
                />
              </Link>
            </Box>
          </Box>

          <SimpleGrid columns={2} spacing={4}>
            {data.small.map((el, i) => (
              <Link key={i} href={`/${el.name}`} _hover={{ transform: 'scale(1.03)' }}>
                <Flex
                  bg="black"
                  height="100%"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  gridGap={2}
                  p={2}
                >
                  <Image src={el.image} width="100px" height="100px" />
                  <Text color="white" isTruncated maxW="150px">
                    {el.name}
                  </Text>
                </Flex>
              </Link>
            ))}
          </SimpleGrid>
        </SimpleGrid>
      </Layout>
    </Box>
  );
};

export default Best;
