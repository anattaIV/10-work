//postcss.config.js нужен, чтобы настроить PostCSS: добавить автоматические префиксы для стилей и уменьшить размер CSS-файлов.
module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano')({
        preset: 'default'
      })
    ]
  };
  