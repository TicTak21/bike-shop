import { Box, Text } from '@chakra-ui/react';
import Layout from '../Layout';

const MainPromo = () => {
  return (
    <Box as="section" bg="white.200">
      <Layout py={10}>
        <Box>
          <Box>
            <Text textTransform="uppercase" fontWeight="700" display="inline" mr={1}>
              streetster
            </Text>
            <Text display="inline">
              – Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>

          <Text mt={4}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Layout>
    </Box>
  );
};

export default MainPromo;
