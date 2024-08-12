import Image from 'next/image';
import Proceadure from './Proceadure';
import Socials from '../socials/Socials';
import DetailsInfo from './DetailsInfo';

const Details = ({ item }) => {
  return (
    <>
      <section>
        <div className="grid grid-cols-12 container gap-8 justify-items-center">
          <DetailsInfo item={item} />
        </div>
      </section>

      <section>
        <div className="container py-12">
          <h3 className="font-semibold text-xl py-6">How to Make it</h3>
          <div>
            {item?.steps.map((step, index) => (
              <Proceadure key={index + 1} step={step} stepOrder={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
