import { Box, Text, Flex, Image } from '@chakra-ui/react';

export interface SearchItemProps {
  name: string;
  price: number;
  image: string;
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
      <Box>
        <Image src={image} />
      </Box>
      <Box>
        <Text textTransform="uppercase">{name}</Text>
        <Text fontWeight="300">{price}₴</Text>
      </Box>
    </Flex>
  );
};

export default SearchItem;
