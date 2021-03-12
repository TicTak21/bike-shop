import { IconButton } from '@chakra-ui/react';
import { MenuIcon } from 'public/icons/Menu/MenuIcon';
import { MutableRefObject } from 'react';

export interface MenuButtonProps {
  color?: string;
  btnRef: MutableRefObject<undefined>;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ color, onClick, btnRef }) => {
  return (
    <IconButton
      aria-label="close"
      variant="link"
      py={1}
      ref={btnRef}
      onClick={onClick}
      icon={<MenuIcon color={color || 'white'} boxSize={6} />}
    />
  );
};

export default MenuButton;
