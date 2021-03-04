import { Stack, Link } from '@chakra-ui/react';
import { SiInstagram } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

export interface SocialProps {
  mediaList: string[];
}

const Social: React.FC<SocialProps> = ({ mediaList }) => {
  const media = {
    instagram: <SiInstagram />,
    facebook: <ImFacebook />,
    telegram: <FaTelegramPlane />,
    twitter: <FaTwitter />,
  };

  return (
    <Stack alignItems="center" direction="row" fontSize="lg">
      {mediaList.map((el) => (
        <Link href={`/${el}`}>{media[el]}</Link>
      ))}
    </Stack>
  );
};

export default Social;
