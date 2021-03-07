import { Button as ChakraButton } from '@chakra-ui/react';

export interface ActionButtonProps {
  children: string | React.ReactNode;
  variant: 'plain' | 'outline';
  [key: string]: any;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, variant = 'plain', ...props }) => {
  const config = {
    plain: {
      colorScheme: 'blackAlpha',
      bg: 'black',
    },
    outline: {
      color: 'black',
      colorScheme: 'whiteAlpha',
      bg: 'transparent',
      border: '3px solid black',
    },
  };

  return (
    <ChakraButton borderRadius="0px" {...config[variant]} {...props}>
      {children}
    </ChakraButton>
  );
};

export default ActionButton;
