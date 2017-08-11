let webpack = require('webpack');
let  path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'src/public');
let APP_DIR = path.resolve(__dirname, 'src/app/js');

let config = {
    entry: APP_DIR + './index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
       rules: [
           {
               test: /\.js$/,
               exclude: /(node_modules)/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['env'],
                       plugins: [require ('babel-plugin-transform-object-rest-spread')]
                   }
               }
           }
       ]
    }
};

module.exports = config;