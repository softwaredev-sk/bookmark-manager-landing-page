import Accordion from './Accordion';

const FAQ_LIST = [
  {
    id: 1,
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    id: 2,
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 3,
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    id: 4,
    question: 'What about other Chromium browsers?',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];

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
