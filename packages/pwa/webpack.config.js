const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const CopyPlugin = require('copy-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

const outputPath = path.resolve(__dirname, './build')

const nodeEnvironment = process.env.NODE_ENV || 'development'

const configs = {}
configs.common = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ecma: 8,
          mangle: false,
          keep_classnames: false,
        },
      }),
    ],
  },
  entry: ['babel-polyfill', './src/index.tsx'],
  module: {
    rules: [
      {
        test: /\.(png|svg|gif|ico|jpg|mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new webpack.DefinePlugin({
      GRAPHQL_ENDPOINT: JSON.stringify(process.env.GRAPHQL_ENDPOINT),
      STORAGE: JSON.stringify(process.env.STORAGE),
      SERVERLESS: JSON.stringify(process.env.SERVERLESS),
      STRIPE_PUBLISHABLE_KEY: JSON.stringify(
        process.env.STRIPE_PUBLISHABLE_KEY
      ),
    }),
    new webpack.ProvidePlugin({ 'window.Quill': 'quill' }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../maya/graphics'),
          to: path.resolve(__dirname, './build/maya'),
        },
        {
          from: path.resolve(__dirname, '../discord/graphics'),
          to: path.resolve(__dirname, './build/discord'),
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      favicon: path.resolve(__dirname, './src/static/favicon-96x.png'),
    }),
    new CaseSensitivePathsPlugin(),
  ],
}

configs.production = {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].bundle.js',
    path: outputPath,
    publicPath: '/',
  },
  devtool: 'source-map',
}

configs.development = {
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: outputPath,
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    disableHostCheck: true,
    contentBase: outputPath,
    historyApiFallback: true,
    public: 'local-pwa.framethrower.io',
    host: '0.0.0.0',
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
}

module.exports = { ...configs.common, ...configs[nodeEnvironment] }
