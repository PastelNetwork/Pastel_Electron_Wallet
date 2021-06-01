module.exports = {
  purge: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
  ],
  theme: {
    screens: {
      sm: '900px',
      md: '1100px',
      lg: '1300px',
      xl: '1440px',
      '2xl': '1700px',
    },
    fontFamily: {
      body: 'Avenir, Roboto, Arial, serif',
    },
    extend: {
      spacing: {
        '3px': '0.188rem',
        '13px': '0.813rem',
        '14px': '0.875rem',
        '15px': '0.938rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '22px': '1.375rem',
        '26px': '1.625rem',
        '30px': '1.875rem',
        '35px': '2.188rem',
        '36px': '2.29rem',
        '37px': '2.313rem',
        '41px': '2.563rem',
        '46px': '2.875rem',
        '50px': '3.125rem',
        '60px': '3.75rem',
        '63px': '3.938rem',
        '66px': '4.125rem',
        '68px': '4.25rem',
        '69px': '4.313rem',
        '70px': '4.375rem',
        '82px': '5.125rem',
        '111px': '6.938rem',
        '112px': '7rem',
        '180px': '11.25rem',
        '220px': '13.75rem',
        '300px': '18.75rem',
        '335px': '20.938rem',
        '352px': '22rem',
        '380px': '23.75rem',
        '419px': '26.187rem',
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
        green: {
          e5: '#E5F6EF',
          38: '#38CB89',
        },
        gray: {
          f8: '#F8F9FA',
          f7: '#F7F8F9',
          e7: '#E7EAF2',
          e6: '#E6E8EC',
          b0: '#B0B7C3',
          a0: '#A0AEC0',
          71: '#718096',
          '4a': '#4A5568',
          '1a': '#1A202C',
          f2: '#F2F2F2',
          35: '#353941',
          33: '#334D6E',
          '2d': '#2D3748',
          '1d': '#1D263A',
          14: '#141416',
        },
        red: {
          '7a': '#FF7A00',
          ef: '#FFEFEB',
        },
        orange: {
          63: '#FE634C',
        },
        button: {
          pressed: '#0E80F5',
          hover: '#278DF6',
          text: '#8E98A3',
        },
        navigation: {
          DEFAULT: '#A6B0C2',
          selected: '#334D6E',
          background: '#E6E8EC',
        },
        tab: {
          active: '#353945',
          hover: '#F4F5F6',
        },
        line: {
          DEFAULT: '#F2F4F7',
        },
        icon: {
          DEFAULT: '#8E98A3',
          active: '#334D6E',
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
        'depth-1': '0px 8px 16px -8px rgba(15, 15, 15, 0.2)',
        '2px':
          '0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)',
        '16px':
          '0px 0px 1px rgba(10, 22, 70, 0.06), 0px 16px 16px rgba(10, 22, 70, 0.1)',
        '30px': '0px 4px 30px rgba(48, 64, 106, 0.1)',
        '44px': '0px 23px 44px rgba(176, 183, 195, 0.14)',
      },
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.375',
        h4: '1.125',
        h5: '1rem',
        h6: '0.875rem',
        15: '0.938rem',
      },
      borderRadius: {
        '4px': '0.25rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
