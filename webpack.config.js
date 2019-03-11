const path = require('path');
const HtlmWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, './src/index')],
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                // options: {
                //     presets: ["env"]
                // }
            }
        ]
    },
    plugins: [
        new HtlmWebpackPlugin()
    ]
}