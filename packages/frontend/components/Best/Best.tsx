import Title from '../Title';
import Layout from '../Layout';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import Image from 'next/image';
import { RightArrowIcon } from '../../public/icons/Arrow/RightArrow';
import Link from '../Link';

const Best = () => {
  const data = {
    big: {
      title: 'streetster bakerstreet',
      desc: 'скорость соедененная с удобством',
    },
    small: [
      { image: '/img/Best/Best-Small-1.png', name: 'Шлем Octane' },
      { image: '/img/Best/Best-Small-2.png', name: 'Защита Canyon' },
      { image: '/img/Best/Best-Small-1.png', name: 'Шлем Octane' },
      { image: '/img/Best/Best-Small-2.png', name: 'Защита Canyon' },
    ],
  };

  const GridFlexBasis = ['100%', , , 'calc(50% - 2rem)'];

  return (
    <Box as="section">
      <Layout>
        <Title color="black">Избранные товары</Title>

        {/* <Flex flexWrap="wrap" alignItems="flex-start" mt={8} gridGap={6}>
          <Box flexBasis={GridFlexBasis}>
            <Link href={`/${data.big.title}`}>
              <Box position="relative">
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
                    {data.big.title}
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
                  <IconButton
                    color="white"
                    variant="link"
                    aria-label="Right arrow"
                    icon={<RightArrowIcon boxSize={6} />}
                    _hover={{ transform: 'scale(1.2)' }}
                  />
                </Box>

                <Box>
                  <Image src="/img/Best/Best-Big-1.png" width="750px" height="450px" />
                </Box>
              </Box>
            </Link>
          </Box>

          <Flex flexBasis={GridFlexBasis} flexDirection="column" gridGap={4}>
            {data.small.map((el, i) => (
              <Flex
                key={i}
                flexDirection="column"
                flexBasis="100%"
                px={8}
                py={4}
                bg="black"
                justifyContent="center"
                alignItems="center"
              >
                <Image src={el.image} width="100px" height="100px" />
                <Text color="white" fontSize="lg">
                  {el.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex> */}
      </Layout>
    </Box>
  );
};

export default Best;
