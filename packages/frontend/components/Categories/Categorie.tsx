import { Text } from '@chakra-ui/react';

export interface CategorieProps {
  name: string;
}

const Categorie: React.FC<CategorieProps> = ({ name }) => {
  return (
    <Text textTransform="uppercase" fontWeight="700" fontSize="xl">
      {name}
    </Text>
  );
};

export default Categorie;
