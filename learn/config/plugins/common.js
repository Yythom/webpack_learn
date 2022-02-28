const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const Css = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const plugin_common = [
    new CleanWebpackPlugin(),
    new WebpackBar(),
    //html-webpack-plugin会在出口生成一个html文件，并引入出口js
    new HtmlWebpackPlugin({
        title: 'my App',
        template: './public/index.html',
        filename: 'index.html',
    }),
    // DefinePlugin可以定义一些全局变量来供我们在开发中使用(webpack)
    // new DefinePlugin({
    //     // 'env': '"development"'
    // }),
    // 复制public文件夹下的文件
    new CopyWebpackPlugin({
        patterns: [
            {
                from: 'public',
                globOptions: {
                    ignore: [ // ignore 配置忽略文件
                        '**/index.html'
                    ]
                }
            }
        ]
    }),
    // 抽离css
    new Css({
        filename: 'css/[name][contenthash].css',
    })
]

module.exports = plugin_common