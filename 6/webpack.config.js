'use strict';

let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let build_dir = path.resolve(__dirname, 'build');
let src_dir = path.resolve(__dirname, 'src');

let config = {
    entry: src_dir + '/app/index.js',
    output:{
        path: build_dir + '/app',
        filename: 'bundle.js',
        publicPath: '/app'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    resolve: {
        extensions: [" ", ".js", ".jsx", ".css",".json"]
    },
    module: {
        loaders: [{
                test:/\.jsx?$/,
                include: src_dir,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }, {
                test: /\.css$/,
                    use: ['css-loader', 'style-loader']
            }, {
            test: /\.json$/,
                loader: 'json-loader'
            },
            {
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path].[name].[ext]'
                    }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

module.exports = config;