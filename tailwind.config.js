/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1170px',

    },
    container: {
      center: true
    },

    fontFamily:{
      'hind-siliguri': ['Hind Siliguri', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#309255',
        'secondary': '#FFA200',
        'heading': '#1D2733',
        'herro-bg':'#EEFBF3',
        'paragraph': '#56616F',
        'card-bg-one': '#FAF5FF',
        'card-bg-two': '#FFF9EB',
        'card-bg-three': '#FFF6F5',
        'card-bg-four': '#F6F5FF',
        'card-bg-five': '#F0FFF5',
        'card-bg-six': '#FFF5EB',
        'card-bg-seven': '#EFF9FE',
        'card-bg-eight': '#EBFFF7',
        'light': '#F5F7FA',
        'section-bg': '#F5FFF9',
        'slider-btn': ' #D8F0E1'
       
      },
      fontSize: {
        '18' : '18px',
        '22px':'22px',
        '40': '40px',
        '48': '48px',
        '24': '24px',
        '32':'32px',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      spacing: {
        '8px' : '8px',
        '12px':'12px',
        '20px': '20px',
        '66px': '66px',
        'menu-right': '40px',
        'section-gap' :'140px',
        'section-gap-two': '100px',
        'section-gap-122': '122px',
        'search-gap':'112px',
        '16px': '16px',
      
      
      },
      
    },
  },
  plugins: [],
}
