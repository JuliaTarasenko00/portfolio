export default {
  content: [
    './index.html',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {},
    },
  },
  screens: {
    xs: '370px',
    sm: '540px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
  },
};
