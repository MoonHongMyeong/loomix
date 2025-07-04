/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ 사용하는 파일 범위
  ],
  darkMode: false, // 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}