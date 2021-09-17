
module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/index.html',
      './public/index.js',
    ],
  }, 
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['IBM Plex Sans','sans-serif'],
      body: ['IBM Plex Sans','sans-serif']
    },
    extend: {
      colors: {
        'colorDarkBlue' : '#5136AD',
        'colorPurple' : '#9272FF',
        'colorPink' : '#FD3E81',
        'colorLightBlue' : '#76E5FC',
        'colorDarkGray' : '#242433',
        'colorLightGray' : '#F9F9F9',
        'colorYellow' : '#98d613'
      },
    }
  },
  variants: {
    extend: { 
      cursor: ['hover', 'focus'],   
    },
  },
  plugins: [],
}
