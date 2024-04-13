import logoImgWhite from '../assets/images/logo-bookmark-white.svg';
import logoFacebook from '../assets/images/icon-facebook.svg';
import logoTwitter from '../assets/images/icon-twitter.svg';

export default function Footer() {
  return (
    <div className="bg-darkblue">
      <footer className="p-8 w-11/12 my-auto mx-auto text-center lg:flex lg:justify-between lg:max-w-[1600px]">
        <div className="lg:flex lg:gap-12">
          <img
            src={logoImgWhite}
            alt="bookmark-logo"
            className="w-fit scale-125 mx-auto py-6"
          />
          <ul className="flex flex-col justify-center my-6 gap-8 uppercase text-white text-xl lg:flex-row">
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-center gap-12 scale-125 mt-12 lg:scale-100 lg:mt-6">
            <li>
              <img src={logoFacebook} alt="facebook-logo" />
            </li>
            <li>
              <img src={logoTwitter} alt="twitter-logo" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
