import { Flex, useDisclosure } from '@chakra-ui/react';
import Logo from './Logo';
import Search from './Search/Search';
import Drawer from './Drawer/Drawer';
import CartButton from './Cart/CartButton';
import MenuButton from './Drawer/MenuButton';
import { useRef } from 'react';

export interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap" gridGap={4}>
      <Logo />

      <Search />

      <Flex justifyContent="space-between" alignItems="center" gridGap={4}>
        <CartButton />
        <MenuButton btnRef={btnRef} onClick={onOpen} />

        <Drawer onClose={onClose} isOpen={isOpen} finalRef={btnRef} />
      </Flex>
    </Flex>
  );
};

export default Nav;
