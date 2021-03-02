import { Global } from '@emotion/react';

// https://chakra-ui.com/guides/with-nextjs-font-files
export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Futura-PT/FuturaPT-Medium.woff') format('woff');
      }

      @font-face {
        font-family: 'Futura PT';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Futura-PT/FuturaPT-Bold.woff') format('woff');
      }
      `}
  />
);
