//webpack.config.js нужен, чтобы сказать Webpack, как собирать проект: какие файлы брать, как их обрабатывать и куда складывать результат.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//По умолчанию Webpack ищет точку входа src/index.js и создаёт выходной файл dist/main.js. Чтобы это изменить или настроить глубже, создаём файл webpack.config.js в корне проекта:
module.exports = {
  mode: 'development', // 'production' или 'development'
  entry: './src/index.js', //файл, с которого начинается сборка всех зависимостей.
  output: { //output.path: абсолютный путь к папке, куда Webpack сложит итоговую сборку.
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', //output.filename: имя итогового JS-файла.
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  // Понадобится для автоматической пересборки проекта
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true, // Включает Hot Module Replacement (Автоматически обновляет страницу в браузере при изменениях в коде без полной перезагрузки страницы.)
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' //обработка через babel
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource' // добавит файлы в dist и вернёт URL
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'assetcd "10 work"/resource'
      },
      {
        test: /\.css$/i,//показывает как обрабатывать css файлы
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader' //Пропускает CSS-код через PostCSS(cssnano autoprefix)
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // исходный HTML-шаблон
      filename: 'index.html'        // имя выходного HTML-файла
    })
  ],
};

