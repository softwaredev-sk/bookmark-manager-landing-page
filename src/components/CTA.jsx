import { useRef, useState } from 'react';
import iconError from '../assets/images/icon-error.svg';

export default function CTA() {
  const email = useRef();
  const [inputError, setInputError] = useState(false);
  const wrongInput = 'bg-softred rounded border-2 border-softred';
  function handleForm(e) {
    e.preventDefault();
    const mail = email.current.value;
    if (!mail.includes('@')) {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 3000);
    }
  }
  return (
    <section className="bg-softblue mt-4 p-5 text-center text-white">
      <article className="lg:w-2/5 lg:mx-auto">
        <p className="py-2 mt-4 uppercase tracking-widest">
          35,000+ Already Joined
        </p>
        <h4 className="text-2xl font-medium">
          Stay up-to-date with what we&apos;re doing
        </h4>
        <form
          className="my-4 flex flex-col gap-4 lg:flex-row lg:w-full lg:mx-auto lg:justify-center"
          onSubmit={handleForm}
        >
          <div className={inputError ? wrongInput : ''}>
            {inputError && (
              <img
                src={iconError}
                className="absolute translate-x-72 translate-y-3 lg:translate-x-56"
              />
            )}
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded py-3 w-full text-darkblue font-medium px-5"
              required
              ref={email}
            />

            {inputError && (
              <>
                <p className="text-left italic p-3 py-1 text-sm tracking-wider font-normal">
                  Whoops, make sure it&apos;s an email
                </p>
              </>
            )}
          </div>
          <button className="bg-softred py-3 rounded font-semibold tracking-wider lg:w-2/5 lg:max-h-12">
            Contact Us
          </button>
        </form>
      </article>
    </section>
  );
}
