import { Flex, useDisclosure } from '@chakra-ui/react';
import CartButton from 'components/Cart/CartButton.component';
import Drawer from 'components/Drawer/Drawer.component';
import MenuButton from 'components/Drawer/MenuButton.component';
import Search from 'components/Search/Search.component';
import { useRef } from 'react';
import Logo from './Logo.component';

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
