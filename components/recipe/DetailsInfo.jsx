import Image from 'next/image';
import Socials from '../socials/Socials';
import TimingRecipe from './TimingRecipe';

const DetailsInfo = () => {
  return (
    <>
      <div className="col-span-12 md:col-span-6">
        <Image
          src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg"
          width={300}
          height={200}
          alt=""
          className="w-full h-full rounded-lg object-contain"
        />
      </div>
      <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
        <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
          White calzones with marinara sauce
        </h2>
        <p className="text-xs text-[#eb4a36] italic my-2">
          Breakfast and Brunch
        </p>
        <p className="text-gray-600 text-sm my-6 leading-6">
          Supermarket brands of ricotta contain stabilizers, which can give the
          cheese a gummy texture when baked. Check the label and choose ricotta
          made with as few ingredients as possible.
        </p>

        <div className="flex gap-4 justify-center divide-x my-12">
          <TimingRecipe />
        </div>

        <div className="flex gap-4 justify-end">
          <Socials />
        </div>
      </div>
    </>
  );
};

export default DetailsInfo;
