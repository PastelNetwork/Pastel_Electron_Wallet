module.exports = {
  purge: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
  ],
  prefix: 'psl-',
  theme: {
    screens: {
      sm: '900px',
      md: '1100px',
      lg: '1300px',
      xl: '1440px',
      '2xl': '1700px',
    },
    fontFamily: {
      body: 'Roboto, Arial, Helvetica, Helvetica Neue, serif',
    },
    extend: {
      spacing: {
        '2px': '0.125rem',
        '3px': '0.1875rem',
        '6px': '0.375rem',
        '8px': '0.5rem',
        '10px': '0.625rem',
        '13px': '0.8125rem',
        '14px': '0.875rem',
        '15px': '0.9375rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '26px': '1.625rem',
        '28px': '1.75rem',
        '30px': '1.875rem',
        '35px': '2.1875rem',
        '36px': '2.25rem',
        '37px': '2.3125rem',
        '40px': '2.5rem',
        '41px': '2.5625rem',
        '46px': '2.875rem',
        '50px': '3.125rem',
        '60px': '3.75rem',
        '63px': '3.9375rem',
        '66px': '4.125rem',
        '68px': '4.25rem',
        '69px': '4.3125rem',
        '70px': '4.375rem',
        '82px': '5.125rem',
        '111px': '6.9375rem',
        '112px': '7rem',
        '190px': '11.875rem',
        '220px': '13.75rem',
        '300px': '18.75rem',
        '315px': '19.6875rem',
        '335px': '20.9375rem',
        '352px': '22rem',
        30: '7.5rem',
      },
      boxShadow: {
        xs:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 32px 40px rgba(10, 22, 70, 0.12)',
        sm:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 3px 3px rgba(10, 22, 70, 0.1)',
        md:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 6px 8px rgba(10, 22, 70, 0.1)',
        lg:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 16px 16px rgba(10, 22, 70, 0.1)',
        xl:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 32px 40px rgba(10, 22, 70, 0.12)',
      },
      colors: {
        success: {
          DEFAULT: '#00D097',
          pressed: '#00B282',
          hover: '#00C28D',
          background: '#E0F9F2',
        },
        warning: {
          DEFAULT: '#FA9501',
          pressed: '#E88A00',
          hover: '#FFA21B',
          background: '#FEF0DC',
        },
        error: {
          DEFAULT: '#DA8AB8',
          pressed: '#C85195',
          hover: '#CE64A1',
          background: '#FAEFF5',
        },
        blue: {
          450: '#3F9AF7',
          '3f': '#3F9AF7',
        },
        gray: {
          f8: '#F8F9FA',
          f7: '#F7F8F9',
          eb: '#EBEBFC',
          e7: '#E7EAF2',
          e6: '#E6E8EC',
          b0: '#B0B7C3',
          a0: '#A0AEC0',
          71: '#718096',
          '4a': '#4A5568',
          '1a': '#1A202C',
          110: '#F2F2F2',
          35: '#353941',
          33: '#334D6E',
          '2d': '#2D3748',
          23: '#23272F',
          '1d': '#1D263A',
          14: '#141416',
        },
        red: {
          '7a': '#FF7A00',
          ef: '#FFEFEB',
        },
        button: {
          pressed: '#0E80F5',
          hover: '#278DF6',
          text: '#8E98A3',
        },
        navigation: {
          DEFAULT: '#A6B0C2',
          selected: '#334D6E',
        },
        tab: {
          active: '#353945',
          hover: '#F4F5F6',
        },
        line: {
          DEFAULT: '#F2F4F7',
        },
        background: {
          onboarding: '#FCFCFD',
          main: '#F8F9FA',
          modal: '#1A1A1A',
        },
      },
      boxShadow: {
        xs:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 32px 40px rgba(10, 22, 70, 0.12)',
        sm:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 3px 3px rgba(10, 22, 70, 0.1)',
        md:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 6px 8px rgba(10, 22, 70, 0.1)',
        lg:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 16px 16px rgba(10, 22, 70, 0.1)',
        xl:
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 32px 40px rgba(10, 22, 70, 0.12)',
      },
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.375',
        h4: '1.125',
        h5: '1rem',
        h6: '0.875rem',
        10: '0.625rem',
        15: '0.938rem',
      },
      borderRadius: {
        '4px': '4px',
      },
    },
    screens: {
      sm: '900px',
      md: '1100px',
      lg: '1300px',
      xl: '1440px',
      '2xl': '1700px',
    },
  },
  variants: {},
  plugins: [],
}
