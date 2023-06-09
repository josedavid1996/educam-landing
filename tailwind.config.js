const defaultTheme = require('tailwindcss/defaultTheme')
const { themes } = require('./tailwind/theme.js')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#4EC9FF',
          100: '#30C0FF',
          200: '#14B8FF',
          300: '#00AFFA',
          400: '#009FE3',
          500: '#008FCC',
          600: '#0081B8',
          700: '#0074A6',
          800: '#006895',
          DEFAULT: '#009FE3'
        },
        secondary: {
          50: '#4839BF',
          100: '#4134AE',
          200: '#3B2F9E',
          300: '#362B90',
          400: '#312783',
          500: '#2C2376',
          600: '#28206A',
          700: '#241D5F',
          800: '#201A56',
          DEFAULT: '#312783'
        },
        tertiary: {
          50: '#FDDB79',
          100: '#FCD258',
          200: '#FBCA3A',
          300: '#FBC31E',
          400: '#FBBC05',
          500: '#E3AA04',
          600: '#CC9904',
          700: '#B88A04',
          800: '#A67C04',
          DEFAULT: '#FBBC05'
        }
      },
      fontFamily: {
        sans: `"DM Sans", ${defaultTheme.fontFamily.sans.join(',')}`,
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        50: '12.5rem',
        90: '22.5rem'
      },
      extendedSpacing: {
        // Fractional values
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '9/10': '90%',

        // Bigger values
        100: '25rem',
        120: '30rem',
        128: '32rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        192: '48rem',
        200: '50rem',
        240: '60rem',
        256: '64rem',
        280: '70rem',
        320: '80rem',
        360: '90rem',
        400: '100rem',
        480: '120rem'
      },
      screens: {
        mdx: '1180px',
        lgx: '1557.7165px'
      },
      height: (theme) => ({
        ...theme('extendedSpacing')
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vh'
      }),
      maxHeight: (theme) => ({
        ...theme('extendedSpacing'),
        none: 'none',
        screen: '100vh'
      }),
      width: (theme) => ({
        ...theme('extendedSpacing')
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('extendedSpacing'),
        screen: '100vw'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('./tailwind/plugins/icons'),
    require('./tailwind/plugins/titles'),
    require('./tailwind/plugins/buttons'),
    require('./tailwind/plugins/paragraphs')
  ]
}
