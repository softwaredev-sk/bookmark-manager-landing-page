import imgDots from '../assets/images/bg-dots.svg';

export default function DownloadCard({ browser, logo, ver }) {
  let classes = 'bg-white shadow-2xl rounded-xl p-3 my-4';
  if (browser === 'firefox') {
    classes += ' lg:relative lg:translate-y-8';
  } else if (browser === 'opera') {
    classes += ' lg:relative lg:translate-y-16';
  }

  return (
    <div className={classes}>
      <img src={logo} alt={browser} className="w-fit my-6 mx-auto" />
      <h3>Add to {browser[0].toUpperCase() + browser.slice(1)}</h3>
      <p className="text-sm text-grayblue w-4/5 m-auto">
        Minimum version {ver}
      </p>
      <img src={imgDots} alt="bg-dots" className="mx-auto my-8" />
      <button className="w-11/12 rounded p-4 mx-1 my-1 bg-softblue text-white font-bold">
        Add & Install Extension
      </button>
    </div>
  );
}
