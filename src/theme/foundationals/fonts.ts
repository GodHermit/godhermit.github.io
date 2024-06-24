import { Courier_Prime } from 'next/font/google';

const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
});

const fonts = {
  heading: `${courier_prime.style.fontFamily}, monospace`,
  body: `${courier_prime.style.fontFamily}, monospace`,
};

export default fonts;
