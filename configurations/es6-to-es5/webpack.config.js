var webpack = require('webpack');
var path = require('path');
console.log(__dirname);

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
