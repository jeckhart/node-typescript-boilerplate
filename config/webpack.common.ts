import {Configuration, ContextReplacementPlugin} from 'webpack';

import {root} from './helpers';

export const config: Configuration = {
  target: 'node',
  // This will be our app's entry point (webpack will look for it in the 'src' directory due to the modulesDirectory setting below). Feel free to change as desired.
  entry: [
    'server.ts'
  ],
  // Output the bundled JS to dist/app.js
  output: {
    filename: 'app.js',
    path: root('dist')
  },
  resolve: {
    // Look for modules in .ts(x) files first, then .js(x)
    extensions: ['.ts', '.js'],
    // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      { test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ ["es2015", { "modules": false }], "stage-0" ]
            }
          },'ts-loader'
        ]
      },
      { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' }
    ]
  },
  plugins: [
    new ContextReplacementPlugin(
      /express(\\|\/)lib/,
      root('node_modules'),
      {
        // Add view engines here. NOTE: these probably want to use a loader anyway, YMMV
        // 'ejs': 'ejs'
      }
    ),
  ],
  node: {
    __dirname: true
  }
};

export default [ config ];
