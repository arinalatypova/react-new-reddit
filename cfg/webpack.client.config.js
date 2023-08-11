const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/client/index.jsx'), // откуда начинать
  output: {
    // куда складывать транспилированные пакеты
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/, // регулярное выражение, в котором описано какие файлы с помощью лодера будут обработаны
        use: ['ts-loader'],
      },
    ],
  },
  devtool: setupDevtool(),
};
