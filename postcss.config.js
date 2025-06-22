// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // THIS IS THE KEY CHANGE FOR TAILWIND CSS v4
    autoprefixer: {},
  },
};