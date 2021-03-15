export const parameters = {
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
  viewport: {
    viewports: {
      xs: {
        name: 'Phones (e.g. iPhone 8)',
        styles: {
          width: '360px',
          height: '640px',
        },
      },
      sm: {
        name: 'Phablets (e.g. iPhone 11 Pro Max)',
        styles: {
          width: '414px',
          height: '896px',
        },
      },
      md: {
        name: 'Tablets (e.g. iPad mini)',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      lg: {
        name: 'Netbooks (e.g. Macbook Air)',
        styles: {
          width: '1152px',
          height: '700px',
        },
      },
      xl: {
        name: 'Laptops (e.g. Macbook Pro)',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
      xxl: {
        name: 'Desktops (e.g. iMac)',
        styles: {
          width: '1920px',
          height: '1080px',
        },
      },
    },
    defaultViewport: 'responsive',
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'dark',
        value: '#2d365c',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
  facelift: {
    enhanceUi: true,
    override: {
      colorPrimary: '#ed6c68',
      colorSecondary: '#2c365a',
      barSelectedColor: '#ed6c68',
      appBg: '#fbfbfb',
      base: 'light',
      brandTitle: 'App StoryBook',
      brandUrl: '/',
    },
  },
}
