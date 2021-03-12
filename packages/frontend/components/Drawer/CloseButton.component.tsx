import { IconButton } from '@chakra-ui/react';
import { CloseIcon } from 'public/icons/Close/CloseIcon';

export interface CloseButtonProps {
  color?: string;
  handler: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ color, handler }) => {
  return (
    <IconButton
      aria-label="close"
      variant="link"
      onClick={handler}
      icon={<CloseIcon color={color || 'black'} key={handler.name + 'close'} />}
    />
  );
};

export default CloseButton;
