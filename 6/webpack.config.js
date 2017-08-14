let path = require('path');

let build_dir = path.resolve(__dirname, 'build');
let src_dir = path.resolve(__dirname, 'src');


let config = {
    entry: src_dir + '/app/js/index.js',
    output:{
        path: build_dir + '/app',
        filename: 'bundle.js',
        publicPath: '/app/js'
    },
    module: {
        loaders: [{
                test: /\.js?$/,
                include: src_dir,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }]
    }
};

module.exports = config;