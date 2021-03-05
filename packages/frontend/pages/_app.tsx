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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.replainSettings = { id: '452ae3fc-bacc-4e2d-85af-fa8066f21679' };
            (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
            var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
            })('https://widget.replain.cc/dist/client.js');
            `,
          }}
        />
        <title>Streetster</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
