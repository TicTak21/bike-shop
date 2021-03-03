import { ChakraProps, Text } from '@chakra-ui/react';

export interface TitleProps {
  children: React.ReactNode;
  [key: string]: any;
}

const Title: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <Text
      as="h1"
      color="white"
      fontSize={['4xl', '4xl', '6xl', '6xl']}
      fontWeight="700"
      lineHeight="60px"
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Title;
