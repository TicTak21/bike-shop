import { Stack } from '@chakra-ui/react';
import { SiInstagram } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import Link from '../Link';

const media = {
  instagram: <SiInstagram />,
  facebook: <ImFacebook />,
  telegram: <FaTelegramPlane />,
  twitter: <FaTwitter />,
  dribbble: <FiDribbble />,
  tiktok: <SiTiktok />,
};

export interface SocialProps {
  mediaList: Array<keyof typeof media>;
}

const Social: React.FC<SocialProps> = ({ mediaList }) => {
  return (
    <Stack alignItems="center" direction="row" fontSize="lg">
      {mediaList.map((el, i) => (
        <Link href={`/${el}`} key={i} isExternal>
          {media[el]}
        </Link>
      ))}
    </Stack>
  );
};

export default Social;
