
export const js = {
  test: /\.js?$/,
  exclude: /node_modules/,
  loader: 'babel'
};

export const sass = {
  test: /\.scss/,
  loader: 'style-loader!css-loader!postcss-loader!sass-loader'
};

export const handlebars = {
  test: /\.(handlebars|hd?bs)$/,
  loader: 'handlebars-loader',
  query: {
    extensions: ['handlebars', 'hdbs', 'hbs'],
    runtime: 'handlebars'
  }
};

export const loaders = [
  js, sass, handlebars
];
