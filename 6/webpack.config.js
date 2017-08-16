let webpack = require('webpack');
let path = require('path');

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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin()
    ],
    module: {
        loaders: [{
                test:/\.jsx?$/,
                include: src_dir,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loader: 'webpack-sass'
            }]
    }
};


module.exports = config;