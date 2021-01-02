let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  entry: ["./assets/js/app.js", "./assets/sass/app.scss"],
  output: {
    path: path.resolve(__dirname, "./static"),
    publicPath: "static/",
    filename: "js/app.js",
    chunkFilename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          extractCSS: true,
          loaders: {
            'scss': ExtractTextPlugin.extract([
              //'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]),
            'sass': ExtractTextPlugin.extract([
              //'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]),
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['env', 'es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: 'resources/images/[name].[ext]?[hash]',
          publicPath: '../',
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([
          //'vue-style-loader',
          'css-loader'
        ]),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          //'vue-style-loader',
          'css-loader',
          'sass-loader'
        ])
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract([
          //'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ])
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js', // уменьшить баг вьюхи? что за баг?
      '~': path.join(__dirname, './assets/js'), // обращение к папке
    },
    extensions: ['.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin({clearConsole: true}),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      async: true,
    }),
  ]
}