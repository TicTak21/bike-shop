import { Box } from '@chakra-ui/layout';

export interface LayoutProps {
  children: React.ReactNode;
  style?: { [key: string]: any };
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <Box maxW="1440px" px="4.8%" py="2%" style={{ ...style }}>
      {children}
    </Box>
  );
};

export default Layout;
