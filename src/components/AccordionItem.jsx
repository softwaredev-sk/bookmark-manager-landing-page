import iconArrow from '../assets/images/icon-arrow.svg';
import iconArrowRed from '../assets/images/icon-arrow-red.svg';
import { useFaqContext } from './FAQ';

export default function AccordionItem({ question, answer, id }) {
  const { openItemId, toggleItem } = useFaqContext();
  return (
    <article className="w-11/12 m-auto py-4 border-b">
      <div
        onClick={() => toggleItem(id)}
        className="flex justify-between hover:cursor-pointer"
      >
        <h3 className="text-darkblue">{question}</h3>
        <button>
          {openItemId != id ? (
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
      {openItemId === id && (
        <p className="py-4 text-grayblue text-left">{answer}</p>
      )}
    </article>
  );
}
