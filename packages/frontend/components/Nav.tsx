import { Flex, Input, Image, InputGroup, InputLeftElement } from '@chakra-ui/react';
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
        <Input type="text" bg="white" borderRadius="20px" />
      </InputGroup>

      <Flex justifyContent="space-between" alignItems="center" gridGap={4}>
        <Link href="/cart">
          <Image src="/icons/Cart/cart.svg" cursor="pointer" />
        </Link>
        <Image src="/icons/Menu/menu.svg" cursor="pointer" />
      </Flex>
    </Flex>
  );
};

export default Nav;
