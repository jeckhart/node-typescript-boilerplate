import {Configuration} from 'webpack';
import * as merge from 'webpack-merge';
import * as WebpackNotifierPlugin from 'webpack-notifier';

import {config as commonConfig} from './webpack.common'

const config: Configuration = {
  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: 'source-map',
  output: {
    devtoolModuleFilenameTemplate: '[resource-path]',
    pathinfo: true
  },
  module: {
    rules: [
       {
         test: /\.ts$/,
         use: [
           {
             loader: 'tslint-loader',
             options: {
               configFile: 'tslint.json',
             },
           },
         ],
       },
     ],
  },
  plugins: [
    // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
}

const merged = merge.smart(commonConfig, config)

export default [ merged ]
