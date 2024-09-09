/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    extend: {
      colors: {
        'bright_bg': "#ffffff", 
        'dark_bg': "#0f2c59",
        'bright_text': "#DAC0A3",
        'dark_text': "#000000",
        
        'input_bg': "#FFE4C4", 
        'input_text': '#333333',
        'special_state_bg': "#f5f5dc"
      }
    },
  },
  plugins: [],
}

