import { Link } from 'components/_shared';

export interface CategoryTitleProps {
  name: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ name }) => {
  return (
    <Link href={`/categories/${name}`} textTransform="uppercase" fontWeight="700" fontSize="xl">
      {name}
    </Link>
  );
};

export default CategoryTitle;
