import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { Fonts } from 'styles/chakra/fonts';
import { theme } from 'styles/chakra/theme';
import 'styles/globals.css';

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
