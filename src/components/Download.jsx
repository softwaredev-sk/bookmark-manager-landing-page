import logoChrome from '../assets/images/logo-chrome.svg';
import logoFirefox from '../assets/images/logo-firefox.svg';
import logoOpera from '../assets/images/logo-opera.svg';
import imgDots from '../assets/images/bg-dots.svg';

export default function Download() {
  return (
    <section className="w-4/5 m-auto text-center">
      <h2 className="w-4/5 m-auto text-center my-4 text-xl font-semibold text-darkblue lg:text-3xl">
        Download the extension
      </h2>
      <p className="text-center text-xs text-grayblue w-4/5 m-auto md:w-4/12 lg:text-lg">
        We&apos;ve got more browsers in the pipeline. Please do let us know if
        you&apos;ve got a favourite you&apos;d like us to prioritize.
      </p>
      <article className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-3">
        <div className="bg-white shadow-2xl rounded-xl p-3 my-4">
          <img src={logoChrome} alt="chrome" className="w-fit my-6 mx-auto" />
          <h3>Add to Chrome</h3>
          <p className="text-sm text-grayblue w-4/5 m-auto">
            Minimum version 62
          </p>
          <img src={imgDots} alt="bg-dots" className="mx-auto my-8" />
          <button className=" w-11/12 rounded p-4 mx-1 my-1 bg-softblue text-white font-bold">
            Add & Install Extension
          </button>
        </div>
        <div className="bg-white shadow-2xl rounded-xl p-3 my-4 lg:relative lg:translate-y-8">
          <img src={logoFirefox} alt="firefox" className="w-fit my-6 mx-auto" />
          <h3>Add to Firefox</h3>
          <p className="text-sm text-grayblue w-4/5 m-auto">
            Minimum version 55
          </p>
          <img src={imgDots} alt="bg-dots" className="my-8" />
          <button className="rounded p-3 mx-1 my-1 bg-softblue text-white font-bold">
            Add & Install Extension
          </button>
        </div>
        <div className="bg-white shadow-2xl rounded-xl p-3 my-4 lg:relative lg:translate-y-16">
          <img src={logoOpera} alt="opera" className="w-fit my-6 mx-auto" />
          <h3>Add to Opera</h3>
          <p className="text-sm text-grayblue w-4/5 m-auto">
            Minimum version 46
          </p>
          <img src={imgDots} alt="bg-dots" className="my-8" />
          <button className="rounded p-3 mx-1 my-1 bg-softblue text-white font-bold">
            Add & Install Extension
          </button>
        </div>
      </article>
    </section>
  );
}
