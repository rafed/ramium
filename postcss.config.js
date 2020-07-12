const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./themes/ramium/layouts/**/*.html'],
      whitelist: ['is-active']
    })
  ]
}