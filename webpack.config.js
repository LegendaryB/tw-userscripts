const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TampermonkeyHeaderPlugin = require('./src/webpack/tampermonkey-header-webpack-plugin');

module.exports = {
  entry: {
    SelectSupportsByPlayer: './src/userscripts/SelectSupportsByPlayer/index.ts'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name]/[name].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TampermonkeyHeaderPlugin({
      resolveHeader: (dirname) => {
        let header = fs.readFileSync(
          path.resolve(__dirname, 'src/userscripts', dirname, 'metadata/header.txt'),
          'utf8');

        return header;
      }
    })
  ],
};


/*
{
        header: (data) => {
          let dirname = path.dirname(data.filename);

          let header = fs.readFileSync(
            path.resolve(__dirname, 'src/userscripts', dirname, 'metadata/header.txt'),
            'utf8');

          return header;
        }
      }
      */