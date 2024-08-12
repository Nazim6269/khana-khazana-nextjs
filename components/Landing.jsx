import Hero from './header/Hero';
import RecipeCategory from './recipe/RecipeCategory';
import RecipeList from './recipe/RecipeList';

const Landing = () => {
  return (
    <section className="container py-8">
      {/* Hero component */}
      <Hero />
      <div className="grid grid-cols-12 py-4">
        <div className="col-span-12 md:col-span-3">
          <h3 className="font-bold text-xl">Recipes</h3>
          {/* Recipe catergory */}
          <RecipeCategory />
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {/* Recipe list */}
            <RecipeList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
