import Image from 'next/image';
import Link from 'next/link';
import RatingButton from '../RatingButton';

const RecipeCard = ({ item }) => {
  return (
    <div className="card">
      <Link href={`/details/${item?.id}`}>
        <Image
          src={item?.image}
          className="rounded-md"
          width={300}
          height={160}
          alt="image"
        />
        <h4 className="my-2">{item?.name}</h4>
      </Link>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <RatingButton item={item} />
        <span>By: {item?.author}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
