import { useRef, useState } from 'react';
import Button from '../UI/FormButton';

export default function CtaForm() {
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
    <form
      className="my-4 flex flex-col gap-4 lg:flex-row lg:w-full lg:mx-auto lg:justify-center"
      onSubmit={handleForm}
    >
      <div className={inputError ? wrongInput : ''}>
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
      <Button classes="bg-softred py-3 rounded font-semibold tracking-wider lg:w-2/5 lg:max-h-12">
        Contact Us
      </Button>
    </form>
  );
}
