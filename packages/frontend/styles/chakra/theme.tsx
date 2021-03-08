import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontSize: '18px',
        overflowX: 'hidden',
      },
    },
  },
  fonts: {
    heading: "'Futura PT', sans-serif",
    body: "'Futura PT', sans-serif",
  },
});
