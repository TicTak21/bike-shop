import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/chakra/theme';
import { Fonts } from '../styles/chakra/fonts';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.svg" type="image/x-icon" />
        <title>Streetster</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
