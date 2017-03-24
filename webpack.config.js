/**
 * Created by Kimi on 2017/3/20.
 */
module.exports = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        filename: 'index.js',
        publicPath: 'js/'

    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    }
};