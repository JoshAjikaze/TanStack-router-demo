
/** @type {import('tailwindcss').Config} */
export default
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
  
      extend: {
        screens: {
          '2md': "900px",
        },
        boxShadow: {
          "custom-1": '2px 2px 5px 0px rgba(0,0,0,0.34)'
        },
        colors: {
          grey: '#848484',
          ash: '#344557',
        },
        backgroundImage: {
          // 'weather': "url(./src/assets/images/weather.png)",
          // 'registration': "url(./src/assets/images/registration_bg.png)",
        }
      },
    },
    plugins: [],
  }

