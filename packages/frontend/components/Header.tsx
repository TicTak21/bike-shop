import { Box, Text } from '@chakra-ui/react';
import Nav from './Nav';
import Layout from './Layout';
import PlainButton from './PlainButton';

interface HeaderProps {
  imgSrc: string;
}

const Header: React.FC<HeaderProps> = ({ imgSrc }) => {
  return (
    <Box
      h="100vh"
      bgImage={`url(${imgSrc})`}
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Layout style={{ height: 'inherit', position: 'relative' }}>
        <Nav />

        <Box position="absolute" bottom="20%">
          <Text color="white" fontSize={['xl', 'xl', '2xl', '2xl']}>
            STREETSTER NATHAN
          </Text>
          <Box
            color="white"
            fontSize={['4xl', '4xl', '6xl', '6xl']}
            fontWeight="700"
            lineHeight="60px"
            mt="10px"
          >
            <Text>Удобный и быстрый</Text>
            <Text>Твой идеал для покорения города</Text>
          </Box>
          <PlainButton type="outline" mt="25px">
            УЗНАТЬ БОЛЬШЕ
          </PlainButton>
        </Box>
      </Layout>
    </Box>
  );
};

export default Header;
