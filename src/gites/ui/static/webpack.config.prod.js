var webpack = require('webpack');
var path = require('path');

var config = {
    context: __dirname,
    entry: {
        app: path.join(__dirname, './app.js'),
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'stage-0'],
                },
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
      extensions: ['js', 'jsx']
    }
}

module.exports = config;