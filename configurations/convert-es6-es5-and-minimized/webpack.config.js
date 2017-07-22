var webpack = require('webpack');
var path = require('path');
console.log(__dirname);

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: '[name].entry.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};
