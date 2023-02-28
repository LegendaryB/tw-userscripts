const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TampermonkeyHeaderPlugin = require('./src/webpack/tampermonkey-header-webpack-plugin');

module.exports = {
  entry: {
    BetterPlayerInfo: './src/userscripts/BetterPlayerInfo/src/index.ts',
    CountOwnSupport: './src/userscripts/CountOwnSupport/src/index.ts',
    DebugScript: './src/userscripts/DebugScript/src/index.ts',
    SelectSupportingPlayer: './src/userscripts/SelectSupportingPlayer/src/index.ts',
    SendBackButtonOnTop: './src/userscripts/SendBackButtonOnTop/src/index.ts',
    ShowCommandsForVillage: './src/userscripts/ShowCommandsForVillage/src/index.ts',
    TribeFarmAndRZStats: './src/userscripts/TribeFarmAndRZStats/src/index.ts',
    VillageDistanceCalculator: './src/userscripts/VillageDistanceCalculator/src/index.ts',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        type: "asset/source",
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name]/[name].user.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TampermonkeyHeaderPlugin({
      resolveHeader: (dirname) => {
        let header = fs.readFileSync(
          path.resolve(__dirname, 'src/userscripts', dirname, 'header.txt'),
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