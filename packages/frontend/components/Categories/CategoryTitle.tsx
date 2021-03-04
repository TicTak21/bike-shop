import Link from '../Link';

export interface CategoryTitleProps {
  name: string;
}

const CategoryTitle: React.FC<CategoryTitleProps> = ({ name }) => {
  const formattedName = name.replaceAll(' ', '-');

  return (
    <Link
      href={`/categories/${formattedName}`}
      textTransform="uppercase"
      fontWeight="700"
      fontSize="xl"
    >
      {name}
    </Link>
  );
};

export default CategoryTitle;
