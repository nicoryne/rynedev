import localFont from 'next/font/local';

export const fredoka = localFont({
  src: [
    {
      path: '../../public/fonts/Fredoka.ttf'
    }
  ],
  variable: '--font-fredoka'
});

export const garet = localFont({
  src: [
    {
      path: '../../public/fonts/Garet.ttf'
    }
  ],
  variable: '--font-garet'
});
