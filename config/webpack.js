var path = require('path')

var config = {
  cache: true,
  devtool: 'inline-source-map',
  entry: getEntryConfig(),
  output: getOutputConfig(),
  module: {
    loaders: [
      {test: /\.js$/, loader: 'webpack-espower', exclude: /node_modules/},
      {test: /\.json$/, loader: 'json'}
    ]
  }
}

function getEntryConfig() {
  if (process.env.BUILD_TESTS) {
    return {
      'tests': './test.js'
    }
  } else {
    return {
      'date_fns': './src/date_fns.js'
    }
  }
}

function getOutputConfig() {
  if (process.env.BUILD_TESTS) {
    return {
      path: path.join(process.cwd(), 'tmp'),
      filename: '[name].js'//,
      //libraryTarget: 'commonjs2'
    }
  } else if (process.env.NODE_ENV == 'test') {
    return {
      path: '/'
    }
  } else {
    return {
      path: path.join(process.cwd(), 'dist'),
      filename: '[name].js',
      library: 'dateFns',
      libraryTarget: 'umd'
    }
  }
}

module.exports = config

