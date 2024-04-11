import logoImgWhite from '../assets/images/logo-bookmark-white.svg';
import closeIcon from '../assets/images/icon-close.svg';
import logoFacebook from '../assets/images/icon-facebook.svg';
import logoTwitter from '../assets/images/icon-twitter.svg';
import { motion } from 'framer-motion';

export default function HeaderOverlay({ onSelect }) {
  return (
    <motion.section
      initial={{ y: -1000 }}
      animate={{ y: [-1000, 0] }}
      exit={{ y: [0, 1000], transition: { duration: 0.3 } }}
      className="bg-darkblue w-full m-auto text-center fixed overflow-x-hidden md:hidden left-0 top-0 right-0 bottom-0 z-10 opacity-95 flex flex-col justify-between"
    >
      <article>
        <div className="flex justify-between m-5">
          <img src={logoImgWhite} alt="bookmark-logo" />
          <img
            src={closeIcon}
            alt="hamburger-icon"
            className="w-5 h-4 my-auto -translate-x-2"
            onClick={onSelect}
          />
        </div>
        <ul className="flex flex-col justify-center align-middle w-10/12 mx-auto my-8 py-4 uppercase text-white text-xl">
          <li className="border-t-[1px] py-4">Features</li>
          <li className="border-t-[1px] py-4">Pricing</li>
          <li className="border-t-[1px] border-b-[1px] py-4">Contact</li>
        </ul>
        <button className="uppercase text-white text-xl font-medium border-white border-2 p-3 w-10/12 mx-auto">
          Login
        </button>
      </article>
      <ul className="flex justify-center gap-12 scale-125 my-12">
        <li>
          <img src={logoFacebook} />
        </li>
        <li>
          <img src={logoTwitter} />
        </li>
      </ul>
    </motion.section>
  );
}
