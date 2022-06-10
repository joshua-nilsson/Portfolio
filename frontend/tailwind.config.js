const { screens } = require('tailwindcss/defaultTheme')
// const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    screens: {
      xs: '350px',
      msm: '425px',
      ...screens,
      '3xl': '2250px',
    },
    boxShadow: {
      theme: 'box-shadow[0 30px 40px 0 rgb(212 217 232 / 20%)]',
    },
    borderWidth: {
      none: '0',
      xs: '1px',
      msm: '2px',
      sm: '3px',
      md: '6px',
      lg: '9px',
    },
    outlineOffset: {
      none: '0',
      xs: '1px',
      msm: '2px',
      sm: '3px',
      md: '6px',
      lg: '9px',
    },
    outlineWidth: {
      none: '0',
      xs: '1px',
      msm: '2px',
      sm: '3px',
      md: '6px',
      lg: '9px',
    },
    fill: {
      primary: '#6C5CE7',
      secondary: '#7D71E0',
      tertiary: '#5D50BF',
      quaternary: '#443A8C',
      white: '#F7F9FC',
      whiteAlt: '#E5EAF3',
      whiteExact: '#FFFFFF',
      gray: '#A9B6CB',
      grayAlt: '#475161',
      grayLight: '#EDF1F7',
      grayLightAlt: '#E8F0FE',
      black: '#222222',
      error: '#EB5646',
      accentOrange: '#F98A10',
      accentPink: '#F948B4',
      accentBlue: '#27A3FF',
      gitHub: '#222222',
      linkedIn: '#0A66C2',
      transparent: 'transparent',
    },
    colors: {
      primary: '#6C5CE7',
      secondary: '#7D71E0',
      tertiary: '#5D50BF',
      quaternary: '#443A8C',
      white: '#F7F9FC',
      whiteAlt: '#E5EAF3',
      whiteExact: '#FFFFFF',
      gray: '#A9B6CB',
      grayAlt: '#475161',
      grayLight: '#EDF1F7',
      grayLightAlt: '#E8F0FE',
      black: '#222222',
      error: '#EB5646',
      accentOrange: '#F98A10',
      accentPink: '#F948B4',
      accentBlue: '#27A3FF',
      gitHub: '#222222',
      linkedIn: '#0A66C2',
      transparent: 'transparent',
    },
    backgroundImage: {
      blob: 'url("https://res.cloudinary.com/joshuanilsson/portfolio/misc/blob.svg")',
      blobAlt: 'url("https://res.cloudinary.com/joshuanilsson/portfolio/misc/blob-alt.svg")',
      purpleCircle: 'url("https://res.cloudinary.com/joshuanilsson/portfolio/misc/circle.svg")',
      storyForge: 'url("https://res.cloudinary.com/joshuanilsson/portfolio/misc/story-forge.png")',
      storyForgePreview: 'url("https://res.cloudinary.com/joshuanilsson/portfolio/misc/story-forge-preview.png")',
      gradient: 'linear-gradient(180deg, rgba(93, 80, 191, 1) 35%, rgba(150, 128, 255, 1) 100%)',
      scrollbar: 'linear-gradient(135deg, rgba(93, 80, 191, 1) 0%, rgba(150, 128, 255, 1) 100%)',
      line: 'linear-gradient(90deg, rgba(93, 80, 191, 1) 0%, rgba(150, 128, 255, 1) 100%)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    /*
    REMINDER: ONLY DEFAULT TAILWIND VARIANTS WORK - CUSTOM VARIANTS ARE NOT YET SUPPORTED FOR TWIN
    https://tailwindcss.com/docs/hover-focus-and-other-states#appendix
    
    SUPPORTED
    plugin(({ addVariant, e }) => addVariant("first-line", ({ modifySelectors, separator }) => modifySelectors(({ className }) => `.${e(`first-line${separator}${className}`)}:first-line`)))

    UNSUPPORTED
    plugin(({ addVariant, e }) => addVariant("second", ({ modifySelectors, separator }) => modifySelectors(({ className }) => `.${e(`second${separator}${className}`)}:nth-child(2)`)))
    */
  ],
  extend: {
    colors: {},
    content: {},
    zIndex: {
      // '-1': '-1',
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./containers/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
}