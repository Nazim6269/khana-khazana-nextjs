import Image from 'next/image';

const RecipeCard = ({ item }) => {
  return (
    <div className="card">
      <Image
        src={item?.image}
        className="rounded-md"
        width={300}
        height={160}
        alt="image"
      />
      <h4 className="my-2">{item?.name}</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {item?.rating}</span>
        <span>By: {item?.author}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
