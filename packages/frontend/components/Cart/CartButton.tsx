import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { CartIcon } from '../../public/icons/Cart/CartIcon';

export interface CardButtonProps {
  color?: string;
}

const CartButton: React.FC<CardButtonProps> = ({ color }) => {
  return (
    <Button variant="link">
      <Link href="/cart">
        <CartIcon cursor="pointer" boxSize={6} color={color || 'white'} />
      </Link>
    </Button>
  );
};

export default CartButton;
