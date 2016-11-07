import precss from 'precss';
import autoprefixer from 'autoprefixer';
import plugins from './config/plugins';
import { loaders } from './config/loaders';
import { externalAssets } from './config/external-assets';

export default {
  entry: [
    './src/index.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    chunkFilename: 'assets/[id].chunk.js',
    filename: 'assets/main.js',
    sourceMapFilename: 'assets/main.js.map'
  },
  externalAssets,
  externals: {
    handlebars: 'Handlebars',
    zendesk_app_framework_sdk: 'ZAFClient'
  },
  devtool: 'inline-source-map',
  resolve: { extensions: ['', '.js', '.jsx', '.handlebars'] },
  plugins,
  module: {
    loaders
  },
  postcss() {
    return [precss, autoprefixer];
  }
};
