import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { SearchIcon } from '../../public/icons/Search/SearchIcon';
import SearchItem from './SearchItem';

const Search = () => {
  const data = {
    results: [
      { name: 'steetster nathan', price: 12000, image: '/img/Search/Search-1.png' },
      { name: 'road nathan', price: 8000, image: '/img/Search/Search-1.png' },
      { name: 'mountain nathan', price: 10000, image: '/img/Search/Search-2.png' },
    ],
  };

  const [isFocused, setIsFocused] = useState(false);
  const [searchvalue, setSearchvalue] = useState('');
  const [searchMatch, setSearchMatch] = useState<unknown[]>(data.results.slice(0, 3));

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchvalue(value);

    if (value === '') {
      setSearchMatch([]);
      return;
    }

    const match = data.results.filter(({ name }) => name.includes(value));

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
            value={searchvalue}
            onChange={(e) => handleSearch(e)}
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
