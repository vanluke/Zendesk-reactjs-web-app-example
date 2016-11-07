import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Copy from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { externalAssets } from './external-assets';

export default [
  new HtmlWebpackPlugin({
    template: '!!handlebars!./assets/templates/index.handlebars',
    inject: false,
    bundle: 'main.js',
    vendorJs: externalAssets.js,
    minify: false,
    filename: './assets/index.html',
    chunks: true
  }),
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '..'),
    verbose: true,
    dry: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    minimize: true
  }),
  new Copy([
    { from: './assets/assets', to: 'assets' },
    { from: './assets/translations', to: 'translations' },
    { from: './assets/manifest.json', to: 'manifest.json' },
    { from: './assets/README.md', to: 'README.md' }
  ]),
  new ExtractTextPlugin('bundle.css')
];
