import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from 'public/icons/Search/SearchIcon';
import { ChangeEvent, useState } from 'react';
import SearchItem from './SearchItem.component';

const Search = () => {
  const data = {
    results: [
      { name: 'streetster nathan', price: 12000, image: '/img/Search/Search-1.png' },
      { name: 'road nathan', price: 8000, image: '/img/Search/Search-1.png' },
      { name: 'mountain nathan', price: 10000 },
      { name: 'streetster nathan 2', price: 13000 },
    ],
  };

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchValue, setSearchvalue] = useState<string>('');

  // TODO: show 3 the most popular products
  const defaultMatch = data.results.slice(0, 3);
  const [searchMatch, setSearchMatch] = useState(defaultMatch);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchvalue(value);

    if (value === '') {
      setSearchMatch([]);
      return;
    }

    const match = data.results.filter(({ name }) => {
      const lowerName = name.toLowerCase();
      const lowerValue = value.toLowerCase();

      return lowerName.includes(lowerValue);
    });

    setSearchMatch(match);
  };

  return (
    <Box position="relative" w="400px" display={['none', 'none', 'block', 'block']}>
      <Box>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            type="text"
            bg="white"
            borderRadius="20px"
            _focus={{ borderBottomRadius: '0' }}
            placeholder="Find your new bike..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchValue}
            onChange={e => handleSearch(e)}
          />
        </InputGroup>
      </Box>

      <Box position="absolute" w="inherit" display={isFocused ? 'block' : 'none'}>
        {searchMatch.length === 0 ? (
          <SearchItem name="Products not found..." />
        ) : (
          searchMatch.map((r, i) => <SearchItem {...r} key={i} />)
        )}
      </Box>
    </Box>
  );
};

export default Search;
