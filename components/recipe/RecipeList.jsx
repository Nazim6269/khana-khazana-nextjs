import { getAllData } from '@/data/query';
import Hero from '../header/Hero';
import RecipeCard from './RecipeCard';
import RecipeCategory from './RecipeCategory';

const RecipeList = async () => {
  const data = await getAllData();

  return (
    <section className="container py-8">
      <Hero />
      <div className="grid grid-cols-12 py-4">
        <div className="col-span-12 md:col-span-3">
          <h3 className="font-bold text-xl">Recipes</h3>
          <RecipeCategory />
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {data?.map((item) => (
              <RecipeCard key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeList;
