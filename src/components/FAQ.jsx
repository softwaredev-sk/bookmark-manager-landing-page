import Accordion from './Accordion';
import { FAQ_LIST } from '../utils/utils';

export default function FAQ() {
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
          {FAQ_LIST.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </div>
      </article>

      <button className="rounded p-3 w-fit my-16 bg-softblue text-white font-medium">
        More Info
      </button>
    </section>
  );
}
