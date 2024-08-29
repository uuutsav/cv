/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',            // Match the index.html file in the root directory
    './pages/**/*.html',     // Match all HTML files in the pages directory and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

