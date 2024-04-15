import DownloadCard from './DownloadCard';
import { BROWSERS } from '../utils/utils';

export default function Download() {
  return (
    <section className="w-4/5 mx-auto my-40 text-center">
      <h2 className="w-4/5 m-auto text-center my-4 text-xl font-semibold text-darkblue lg:text-3xl">
        Download the extension
      </h2>
      <p className="text-center text-xs text-grayblue w-4/5 m-auto md:w-4/12 lg:text-lg">
        We&apos;ve got more browsers in the pipeline. Please do let us know if
        you&apos;ve got a favourite you&apos;d like us to prioritize.
      </p>
      <article className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-3">
        {BROWSERS.map((browser) => (
          <DownloadCard
            key={browser.name}
            browser={browser.name}
            logo={browser.logo}
            ver={browser.minver}
          />
        ))}
      </article>
    </section>
  );
}
