import Image from 'next/image';
import Socials from '../socials/Socials';
import TimingRecipe from './TimingRecipe';

const DetailsInfo = ({ item }) => {
  return (
    <>
      <div className="col-span-12 md:col-span-6">
        <Image
          src={item?.image}
          width={300}
          height={200}
          alt=""
          className="w-full h-full rounded-lg object-contain"
        />
      </div>
      <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
        <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
          {item?.name}
        </h2>
        <p className="text-xs text-[#eb4a36] italic my-2">{item?.category}</p>
        <p className="text-gray-600 text-sm my-6 leading-6">
          {item?.description}
        </p>

        <div className="flex gap-4 justify-center divide-x my-12">
          <TimingRecipe item={item} />
        </div>

        <div className="flex gap-4 justify-end">
          <Socials />
        </div>
      </div>
    </>
  );
};

export default DetailsInfo;
