import Image from 'next/image';
import Proceadure from './Proceadure';
import Socials from '../socials/Socials';
import DetailsInfo from './DetailsInfo';

const Details = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-12 container gap-8 justify-items-center">
          <DetailsInfo />
        </div>
      </section>

      <section>
        <div className="container py-12">
          <h3 className="font-semibold text-xl py-6">How to Make it</h3>
          <div>
            <Proceadure />
            <Proceadure />
            <Proceadure />
            <Proceadure />
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
