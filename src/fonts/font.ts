// src/fonts/fonts.ts
import { Inter, Roboto } from '@next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
  variable: '--font-inter',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Add other weights if needed
  variable: '--font-roboto',
});
