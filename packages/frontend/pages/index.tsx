import { Box, Grid } from '@chakra-ui/react';
import Best from 'components/Best/Best.component';
import Categories from 'components/Categories/Categories.component';
import Header from 'components/Header/Header.component';
import MainPromo from 'components/Promo/MainPromo.component';
import MainPromo2 from 'components/Promo/MainPromo2.component';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <Box position="relative">
        <Box position="absolute" zIndex={-1} w="100vw" h="100%">
          <Image src="/img/Bg/Bg-1.png" alt="" layout="fill" objectFit="cover" quality={100} />
        </Box>

        <Grid gridGap={10}>
          <Categories />
          <Best />
        </Grid>
      </Box>
      <MainPromo />
      <MainPromo2 />
    </>
  );
}
