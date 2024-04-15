import logoImg from '../assets/images/logo-bookmark.svg';
import openIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';

export default function Header({ onSelect, overlay }) {
  console.log(overlay);
  return (
    <header className="flex justify-between m-5">
      <img src={logoImg} alt="bookmark-logo" className="h-fit" />
      <img
        src={!overlay ? openIcon : closeIcon}
        alt="hamburger-icon"
        className="w-5 h-4 my-auto md:hidden"
        onClick={onSelect}
      />
      <nav className="hidden md:flex md:flex-row md:gap-12">
        <ul className="flex py-4 gap-12 uppercase text-xl">
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <button className="bg-softred uppercase text-lg font-medium text-white rounded-md border-white border-2 px-6 py-1 w-10/12 mx-auto">
          Login
        </button>
      </nav>
    </header>
  );
}
