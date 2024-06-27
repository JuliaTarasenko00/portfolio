export default {
  content: [
    './index.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        contact: 'url("./assets/image/image_not_found.png")',
      },
      transitionDuration: {
        350: '350ms',
      },
      colors: {
        main_color: '#242424',
      },
    },
  },
  screens: {
    xs: '320px',
    sm: '540px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
};
