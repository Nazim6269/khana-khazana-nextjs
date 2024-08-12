import { getAllData } from '@/data/query';
import RecipeCard from './RecipeCard';

const RecipeList = async () => {
  const data = await getAllData();

  return (
    <>
      {data?.map((item) => (
        <RecipeCard key={item?.id} item={item} />
      ))}
    </>
  );
};

export default RecipeList;
