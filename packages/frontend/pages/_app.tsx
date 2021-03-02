import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/chakra/theme';
import { Fonts } from '../styles/chakra/fonts';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
