export const theme = {
  font: {
    size: {
      mobile: {
        xs: '1rem',
        s: '1.2rem',
        m: '1.4rem',
        l: '2rem',
        xl: '2.4rem',
        title: '5.8rem'
      },
      desktop: {
        xs: '1.2rem',
        s: '1.6rem',
        m: '2rem',
        l: '2.4rem',
        xl: '4.6rem',
        title: '8.9rem'
      }
    },
    family: {
      futura: 'Futura',
      futuraRegular: 'Futura-regular'
    }
  },
  color: {
    background: '#212121',
    backgroundGradient:
      'linear-gradient(to bottom, rgba(28,28,28,1) 0%, rgba(33,33,33,1) 20%, rgba(33,33,33,1) 52%)',
    menuBox: '#272727'
  },
  mq: {
    mobileL: '@media all and (min-width: 370px)',
    tablet: '@media all and (min-width: 710px)',
    standard: '@media all and (min-width: 1024px)',
    desktop: '@media all and (min-width: 1440px)'
  }
};
