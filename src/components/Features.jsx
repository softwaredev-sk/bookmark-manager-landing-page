import { useState } from 'react';
import { FEATURES_DATA } from '../utils/data';
import Shadow from '../UI/Shadow';
import Button from '../UI/FormButton';

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="my-24">
      <h2 className="w-4/5 m-auto text-center my-4 text-xl font-semibold text-darkblue md:w-3/5 lg:text-3xl">
        Features
      </h2>
      <p className="text-center text-sm text-grayblue w-4/5 m-auto md:w-2/5 md:text-lg">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <ul className="my-10 md:flex md:w-2/3 md: m-auto">
        {FEATURES_DATA.map((data, index) => (
          <li
            key={data.id}
            className="text-grayblue flex justify-center align-middle mx-auto text-lg border-t-2 font-normal w-4/5 last:border-b-2 md:w-full md:border-b-2 md:border-t-0"
          >
            <button
              onClick={() => setActiveIndex(index)}
              className={`${
                index === activeIndex
                  ? 'border-b-4 w-fit py-2 border-b-red-400 text-darkblue md:w-full'
                  : 'py-2'
              }`}
            >
              {data.button}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5 md:flex md:w-4/5 md:m-auto">
        <img
          src={FEATURES_DATA[activeIndex].image}
          alt="feature-1"
          className="w-4/5 m-auto md:w-1/2"
        />
        <Shadow side={'left'} ind={activeIndex === 0} />
        <div className="mt-16 w-4/5 m-auto text-center md:text-left md:ml-8 md:w-2/5 ">
          <h2 className="text-darkblue text-2xl font-semibold lg:text-3xl">
            {FEATURES_DATA[activeIndex].title}
          </h2>
          <p className="text-grayblue text-sm my-2 lg:text-lg">
            {FEATURES_DATA[activeIndex].desc}
          </p>
          <Button classes="hidden rounded p-3 text-left w-fit my-16 bg-softblue text-white font-medium md:my-4 md:block">
            More Info
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Features;
