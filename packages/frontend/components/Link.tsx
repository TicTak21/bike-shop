import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/link';

type GeneralLinkProps = NextLinkProps & ChakraLinkProps;

interface LinkProps extends GeneralLinkProps {
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, href, ...props }) => {
  return (
    <ChakraLink href={href} {...props}>
      {children}
    </ChakraLink>
  );
};

export default Link;
