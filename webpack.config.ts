const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: {
      type: 'module', // ESM output (recommended for packages)
    },
    clean: true,
  },
  experiments: {
    outputModule: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],   // <-- IMPORTANT
          transpileOnly: true             // recommended
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: 'sass-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue'],
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  target: 'node',
  externals: {
    vue: 'vue',
  },
};
