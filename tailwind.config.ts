import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        thunder: 'var(--thunder)',
        honey: 'var(--honey)'
      },
      fontFamily: {
        fredoka: 'var(--font-fredoka)',
        garet: 'var(--font-garet)'
      }
    }
  },
  plugins: []
} satisfies Config;
