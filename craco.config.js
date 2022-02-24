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
  webpack: {
    alias: {
      '@/atoms': path.resolve(__dirname, 'src/atoms'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
    }
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