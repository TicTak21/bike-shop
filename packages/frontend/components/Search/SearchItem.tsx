import { Box, Text, Flex, Image } from '@chakra-ui/react';
import Link from '../Link';

interface SearchItemProps {
  name?: string;
  price?: number;
  image?: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ name, price, image }) => {
  return (
    <Flex
      bg="#F2F2F2"
      px={4}
      py={2}
      gridGap={2}
      w="inherit"
      zIndex="99"
      color="black"
      cursor="pointer"
      transition="0.3s ease-in-out"
      borderTop="1px solid black"
      _first={{ border: 'none' }}
      _last={{ borderBottomRadius: '20px' }}
      _hover={{ bg: '#D4D4D4' }}
    >
      <Link href={`/${name}`} w="inherit" h="inherit">
        <Flex>
          {image && (
            <Box>
              <Image src={image} />
            </Box>
          )}
          <Box>
            {name && <Text textTransform="uppercase">{name}</Text>}
            {price && <Text fontWeight="300">{price}₴</Text>}
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};

export default SearchItem;
