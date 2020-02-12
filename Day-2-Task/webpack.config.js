// Webpack uses this to work with directories
const path = require('path');

const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },





  entry: './src/javascript/index.js',

//module.exports = {
  plugins: [ new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),



   ],
//};

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module:{
      rules: [
  {
  // test: /\.js$/,
  // exclude: /(node_modules)/,
  // use: {
  // loader: 'babel-loader',
  // options: {
  // presets: ['@babel/preset-env']

  // }


  test: /\.scss$/,
  loader: 'style-loader!css-loader!sass-loader',
  test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
  }
  
  ]
},

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development'
};
