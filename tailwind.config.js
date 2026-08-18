/** @type {import('tailwindcss').Config} */
// Menggantikan cdn.tailwindcss.com (JIT runtime) dengan CSS statis pra-build.
// Config di sini WAJIB cerminan dari inline `tailwind.config` yg dulu ada di index.html.
module.exports = {
  content: ['./index.html', './js.js'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        darkbg: '#0B1220',
        softbg: '#F7F9F7',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
