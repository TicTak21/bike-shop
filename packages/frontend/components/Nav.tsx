import { Flex, Input, Image, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import Logo from './Logo';
import Link from 'next/link';

export interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gridGap={4}>
      <Logo />

      <InputGroup w="400px" display={['none', 'none', 'block', 'block']}>
        <InputLeftElement
          pointerEvents="none"
          children={<Image src="/icons/Search/search.svg" />}
        />
        <Input type="text" bg="white" borderRadius="20px" placeholder="Find your new bike..." />
      </InputGroup>

      <Flex justifyContent="space-between" alignItems="center" gridGap={4}>
        <Button variant="link">
          <Link href="/cart">
            <Image src="/icons/Cart/cart.svg" cursor="pointer" />
          </Link>
        </Button>

        <Button variant="link" py={1}>
          <Image src="/icons/Menu/menu.svg" cursor="pointer" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Nav;
