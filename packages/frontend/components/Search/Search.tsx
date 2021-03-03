import { Input, Image, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import { useState } from 'react';
import SearchItem from './SearchItem';

export interface SearchProps {
  text: string;
}

const Search: React.FC<SearchProps> = ({ text }) => {
  const [isFocused, setIsFocused] = useState(false);

  const data = {
    results: [
      { name: 'steetster nathan', price: 12000, image: '/img/Search/Search-1.png' },
      { name: 'steetster nathan', price: 10000, image: '/img/Search/Search-2.png' },
    ],
  };

  return (
    <Box position="relative" w="400px" display={['none', 'none', 'block', 'block']}>
      <Box>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Image src="/icons/Search/search.svg" />}
          />
          <Input
            type="text"
            bg="white"
            borderRadius="20px"
            _focus={{ borderBottomRadius: '0' }}
            placeholder="Find your new bike..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </InputGroup>
      </Box>

      <Box position="absolute" w="inherit" display={isFocused ? 'block' : 'none'}>
        {data.results.map((r, i) => (
          <SearchItem {...r} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default Search;
