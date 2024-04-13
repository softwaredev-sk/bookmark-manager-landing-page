import AccordionItem from './AccordionItem';
import { FAQ_LIST } from '../utils/utils';
import { createContext, useContext, useState } from 'react';

const FaqContext = createContext();

export function useFaqContext() {
  const ctx = useContext(FaqContext);

  if (!ctx) {
    throw new Error('Required Component not wrapped with Provider Component');
  }
  return ctx;
}

export default function FAQ() {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    if (id != openItemId) {
      setOpenItemId(id);
    } else {
      setOpenItemId(undefined);
    }
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };
  return (
    <section className="w-11/12 m-auto text-center mt-24 lg:w-3/5">
      <h2 className="w-4/5 m-auto text-center my-4 text-xl font-semibold text-darkblue lg:text-3xl">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-md text-grayblue mb-9 lg:w-10/12 lg:mx-auto lg:text-lg">
        Here are some of our FAQs. If you have any other questions you&apos;d
        like answered please feel free to email us.
      </p>
      <article>
        <div>
          <FaqContext.Provider value={contextValue}>
            {FAQ_LIST.map((item) => (
              <FAQ.Item key={item.id} {...item} id={item.id} />
            ))}
          </FaqContext.Provider>
        </div>
      </article>

      <button className="rounded p-3 w-fit my-16 bg-softblue text-white font-medium">
        More Info
      </button>
    </section>
  );
}

FAQ.Item = AccordionItem;
