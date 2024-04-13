import { useRef, useState } from 'react';
import iconError from '../assets/images/icon-error.svg';

export default function CTA() {
  const email = useRef();
  const [inputError, setInputError] = useState(true);
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
  const errorSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23FA5959'/%3E%3Cg fill='%23FFF' transform='translate(9 5)'%3E%3Crect width='2' height='7' rx='1'/%3E%3Crect width='2' height='2' y='8' rx='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
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
            {/* {inputError && (
              <img
                src={iconError}
                className="absolute translate-x-72 translate-y-3 lg:translate-x-56"
                alt="error-icon"
              />
            )} */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded py-3 w-full text-darkblue font-medium px-5"
              id="input-cta"
              required
              ref={email}
            />

            {inputError && (
              <>
                <p
                  className={`text-left relative italic p-3 py-1 text-xs tracking-wider font-normal after:inline-block after:content-[url("/icon-error.svg")] after:absolute after:right-12 after:-translate-y-10 lg:after:right-4`}
                >
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
