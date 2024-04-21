module.exports = {
  mode: 'jit',
  darkMode: 'class', // Add this line
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    minWidth: {
      '40': '10rem',
      '60': '15rem',
      '80': '20rem',
      '100': '25rem',
    },
    maxWidth: {
      '120': '30rem',
      '160': '40rem',
      '200': '50rem',
    }
  },
  variants: {
    extend: {
      backgroundColor: "blue", // Change 'high-contrast' to 'dark'
      textColor: ['dark'], // Change 'high-contrast' to 'dark'
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'emerald'
    ],
  }
}