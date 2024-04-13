import { useState } from 'react';
import iconArrow from '../assets/images/icon-arrow.svg';
import iconArrowRed from '../assets/images/icon-arrow-red.svg';

export default function Accordion({ question, answer }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <article className="w-11/12 m-auto py-4 border-b">
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        className="flex justify-between"
      >
        <h3 className="text-darkblue">{question}</h3>
        <button>
          {!isVisible ? (
            <img src={iconArrow} alt="faq-question-is-closed" />
          ) : (
            <img
              src={iconArrowRed}
              className="rotate-180"
              alt="faq-question-is-open"
            />
          )}
        </button>
      </div>
      {isVisible && <p className="py-4 text-grayblue text-left">{answer}</p>}
    </article>
  );
}
