import { Box } from '@chakra-ui/layout';

export interface LayoutProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  return (
    <Box maxW="1440px" px="4.8%" py="2%" {...rest}>
      {children}
    </Box>
  );
};

export default Layout;
