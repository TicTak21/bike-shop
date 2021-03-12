import { Stack } from '@chakra-ui/react';
import { Link } from 'components/_shared';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { ImFacebook } from 'react-icons/im';
import { SiInstagram, SiTiktok } from 'react-icons/si';

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
