const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary_100: '#b0d3ed',
        primary_200: '#8abee5',
        primary_300: '#54a1d9',
        primary_400: '#338ed1',
        primary_500: '#668ecf',
        primary_600: '#008bd6',
        primary_700: '#022038',
        primary_800: '#003f6d',
        primary_900: '#003053',
      },
    },
  },
  plugins: [],
};
