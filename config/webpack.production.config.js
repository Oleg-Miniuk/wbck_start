const path = require('path');
const commonWebpackModules = require('./commonWebpackModules');

module.exports = (env = {}) => {
  const {
    module: { rules: commonRules },
    resolve: { alias: commonAlias },
    plugins: commonPlugins,
    devtool: commonDevTool
  } = commonWebpackModules(env);

  const config = {
    mode: 'production',

    context: path.join(__dirname, '../src'),

    entry: {
      bundle: './index.js'
    },

    output: {
      filename: '[name].js',
      path: path.join(__dirname, '../build_prod')
    },

    resolve: {
      alias: {
        ...commonAlias
      }
    },

    module: {
      rules: [...commonRules]
    },
    plugins: [...commonPlugins],
    devtool: commonDevTool
  };

  return config;
};
