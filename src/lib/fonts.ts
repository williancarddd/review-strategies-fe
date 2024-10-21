import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['400', '900'], subsets: ['latin'], variable: '--font-roboto' });

export const Fonts = [roboto];