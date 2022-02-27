const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
        new WebpackBar(),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'my App',
            template: './index.html',
            filename: 'index.html'
        }),
    ],
    module: { //所有第三方模块加载器
        rules: [ //所有第三方匹配规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            }
        ]
    },

}