import { Button } from '@chakra-ui/react';

export interface LangButtonProps {
  label: string;
}

const LangButton: React.FC<LangButtonProps> = ({ label }) => {
  return (
    <Button variant="link" textTransform="uppercase" fontWeight="400" color="black">
      {label}
    </Button>
  );
};

export default LangButton;
