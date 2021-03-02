import { Image } from '@chakra-ui/react';

export interface LogoProps {
  imgSrc?: string;
}

const Logo: React.FC<LogoProps> = ({ imgSrc }) => {
  return <Image src={imgSrc || '/icons/Logo/logo.svg'} />;
};

export default Logo;
