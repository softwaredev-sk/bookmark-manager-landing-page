import tabOne from '../assets/images/illustration-features-tab-1.svg';
import tabTwo from '../assets/images/illustration-features-tab-2.svg';
import tabThree from '../assets/images/illustration-features-tab-3.svg';

import logoChrome from '../assets/images/logo-chrome.svg';
import logoFirefox from '../assets/images/logo-firefox.svg';
import logoOpera from '../assets/images/logo-opera.svg';

export const FAQ_LIST = [
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

export const FEATURES_DATA = [
  {
    id: 1,
    title: 'Bookmark in one click',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    button: 'Simple Bookmarking',
    image: tabOne,
  },
  {
    id: 2,
    title: 'Intelligent search',
    desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    button: 'Speedy Searching',
    image: tabTwo,
  },
  {
    id: 3,
    title: 'Share your bookmarks',
    desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    button: 'Easy Sharing',
    image: tabThree,
  },
];

export const BROWSERS = [
  {
    name: 'chrome',
    minver: '62',
    logo: logoChrome,
  },
  {
    name: 'firefox',
    minver: '55',
    logo: logoFirefox,
  },
  {
    name: 'opera',
    minver: '46',
    logo: logoOpera,
  },
];
