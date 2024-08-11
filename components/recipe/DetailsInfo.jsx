import Image from 'next/image';
import Socials from '../socials/Socials';
import TimingRecipe from './TimingRecipe';

const DetailsInfo = () => {
  return (
    <>
      <div class="col-span-12 md:col-span-6">
        <Image
          src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg"
          width={300}
          height={200}
          alt=""
          class="w-full h-full rounded-lg object-contain"
        />
      </div>
      <div class="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
        <h2 class="font-semibold text-4xl lg:w-8/12 leading-10">
          White calzones with marinara sauce
        </h2>
        <p class="text-xs text-[#eb4a36] italic my-2">Breakfast and Brunch</p>
        <p class="text-gray-600 text-sm my-6 leading-6">
          Supermarket brands of ricotta contain stabilizers, which can give the
          cheese a gummy texture when baked. Check the label and choose ricotta
          made with as few ingredients as possible.
        </p>

        <div class="flex gap-4 justify-center divide-x my-12">
          <TimingRecipe />
        </div>

        <div class="flex gap-4 justify-end">
          <Socials />
        </div>
      </div>
    </>
  );
};

export default DetailsInfo;
