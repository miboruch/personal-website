export const theme = {
  font: {
    size: {
      mobile: {
        xs: '10px',
        s: '12px',
        m: '18px',
        l: '20px',
        xl: '24px',
        title: '58px'
      },
      desktop: {
        xs: '12px',
        s: '16px',
        m: '18px',
        l: '21px',
        xl: '46px',
        title: '89px'
      }
    },
    family: {
      futura: 'Futura',
      futuraRegular: 'Futura-regular',
      avanti: 'Avanti'
    }
  },
  color: {
    background: '#212121',
    backgroundGradient:
      'linear-gradient(to bottom, rgba(28,28,28,1) 0%, rgba(33,33,33,1) 20%, rgba(33,33,33,1) 52%)',
    lightThemeBackground: '#f1f1f1',
    lightThemeBackgroundGradient:
      'linear-gradient(to bottom, #e5e5e5 0%, #f5f5f3 20%, #f5f5f3 52%)',
    menuBox: '#272727'
  },
  mq: {
    mobileL: '@media all and (min-width: 370px)',
    tablet: '@media all and (min-width: 710px)',
    standard: '@media all and (min-width: 1024px)',
    desktop: '@media all and (min-width: 1440px)'
  }
};
