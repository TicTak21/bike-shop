import { Image } from '@chakra-ui/react';

export interface LogoProps {
  variant?: 'black' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'white' }) => {
  // variant for css `invert` function
  const variantsTable = {
    white: 0,
    black: 1,
  };

  return <Image src="/icons/Logo/logo.svg" filter={`invert(${variantsTable[variant]})`} />;
};

export default Logo;
