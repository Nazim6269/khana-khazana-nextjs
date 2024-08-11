import Image from 'next/image';

const RecipeCard = () => {
  return (
    <div className="card">
      <Image
        src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg"
        className="rounded-md"
        width={300}
        height={160}
        alt="image"
      />
      <h4 className="my-2">Chef John &apos s Turkey Sloppy Joes</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </div>
  );
};

export default RecipeCard;
