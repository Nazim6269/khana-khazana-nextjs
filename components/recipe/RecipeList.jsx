import Hero from '../header/Hero';
import RecipeCard from './RecipeCard';
import RecipeCategory from './RecipeCategory';

const RecipeList = () => {
  return (
    <section className="container py-8">
      <Hero />
      <div class="grid grid-cols-12 py-4">
        <div class="col-span-12 md:col-span-3">
          <h3 class="font-bold text-xl">Recipes</h3>
          <RecipeCategory />
        </div>

        <div class="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeList;
