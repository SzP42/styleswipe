/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    extend: {
      colors: {
        'bright_bg': "#f0eee6", 
        'dark_bg': "#ac663e",
        'bright_text': "#f2f1ea",
        'dark_text': "#7b3f00",
        
        'input_bg': "#FFE4C4", 
        'input_text': '#333333',
        'special_state_bg': "#f5f5dc"
      }
    },
  },
  plugins: [],
}

