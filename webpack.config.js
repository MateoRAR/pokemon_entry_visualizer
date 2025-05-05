const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Archivo principal de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
    filename: 'bundle.js',  // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Aplica Babel a archivos JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Transpila JS moderno a ES5
          },
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // procesa archivos CSS
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',  // Plantilla HTML para generar el archivo
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',  // Modo de desarrollo
};