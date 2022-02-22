const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.join(__dirname, "src/styles")]
        }
      }
    },
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/styles/abstract/index.scss',
      },
    },
  ],
}