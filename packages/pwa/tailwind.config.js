module.exports = {
  theme: {
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    extend: {
      minHeight: {
        content: 'calc(100vh - 165px)',
      },
      backgroundOpacity: {
        '10': '0.1',
      },
      height: {
        '0.5': '0.125rem',
      },
      gridAutoRows: {
        0: '0',
      },
      gridTemplateRows: {
        head: 'repeat(1, 1fr)',
      },
      gridTemplateColumns: {
        head: 'repeat(auto-fit, minmax(120px, 1fr))',
        allheads: 'repeat(auto-fit, 200px)',
        16: 'repeat(auto-fit, minmax(320px, 1fr))',
      },
      boxShadow: {
        vignette: 'inset 0px 0px 30px rgba(0,0,0,0.35);',
      },
      colors: {
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#333',
          900: '#212121',
        },
      },
      height: {
        'screen-xl': '720px',
        headline: '50rem',
      },
      width: {
        'screen-xl': '1280px',
        headline: '50rem',
      },
    },
  },
}
