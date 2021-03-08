import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Text,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { RefObject } from 'react';
import CartButton from '../Cart/CartButton';
import CloseButton from './CloseButton';
import LangButton from '../Lang/LangButton';
import CategoryTitle from '../Categories/CategoryTitle';
import Social from '../Social/Social';
import Link from '../Link';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  finalRef: RefObject<any>;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, finalRef }) => {
  const data = {
    categories: [{ name: 'road series' }, { name: 'street series' }, { name: 'mountain series' }],
  };

  return (
    <ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={finalRef}>
      <DrawerOverlay>
        <DrawerContent p={8}>
          <DrawerHeader fontWeight="400" p={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                <LangButton label="ru" />
                <Text fontWeight="400">/</Text>
                <LangButton label="en" />
              </Flex>

              <Flex>
                <CartButton color="black" />
                <CloseButton handler={onClose} />
              </Flex>
            </Flex>
          </DrawerHeader>

          <DrawerBody mt={6}>
            <Stack spacing={8}>
              <Stack spacing={2}>
                {data.categories.map((c, i) => (
                  <CategoryTitle name={c.name} key={i} />
                ))}
              </Stack>

              <Stack>
                <Link href="/news">Новости</Link>
                <Link href="/about">О нас</Link>
                <Link href="/contacts">Контакты</Link>
              </Stack>

              <Social
                mediaList={['instagram', 'facebook', 'telegram', 'twitter', 'dribbble', 'tiktok']}
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start">Streetster 2021</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  );
};

export default Drawer;
