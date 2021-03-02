import { Button as ChakraButton } from '@chakra-ui/react';

export interface PlainButtonProps {
  children: string | React.ReactNode;
  [key: string]: any;
}

const PlainButton: React.FC<PlainButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton colorScheme="blackAlpha" bg="black" borderRadius="0px" {...props}>
      {children}
    </ChakraButton>
  );
};

export default PlainButton;
