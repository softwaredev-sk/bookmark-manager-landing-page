import { useState } from 'react';
import heroImg from '../assets/images/illustration-hero.svg';
import Button from '../UI/CTAButton';
import Shadow from '../UI/Shadow';
import { BROWSERS } from '../utils/utils';

function Hero() {
  const [active, setActive] = useState('chrome');
  function handleClick(text) {
    setActive(text);
  }

  return (
    <>
      <section className="w-11/12 relative my-10 lg:flex lg:flex-row-reverse xl:mx-auto">
        <div className="lg:w-1/2">
          <img
            src={heroImg}
            id="hero-image"
            alt="hero-image"
            className="w-fit mx-auto"
          />
          <Shadow side={'right'} />
        </div>
        <div className="text-center lg:text-left lg:w-1/2 xl:max-w-3xl xl:mx-20">
          <div className="my-10">
            <h2 className="w-4/5 mx-auto my-4 text-3xl font-bold text-darkblue lg:text-5xl lg:font-medium xl:text-6xl xl:w-full">
              A Simple Bookmark Manager
            </h2>
            <p className="text-grayblue w-4/5 m-auto xl:text-2xl xl:w-full">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </div>
          <div className="w-4.5/5 m-auto lg:w-4/5 xl:w-full">
            {BROWSERS.slice(0, 2).map((item) => (
              <Button
                key={item.name}
                isActive={active === item.name}
                onClicking={() => handleClick(item.name)}
              >
                Get it on {item.name[0].toUpperCase() + item.name.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
