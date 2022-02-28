const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const rules = [                  //所有第三方匹配规则
    {
        test: /\.css$/,
        use: [MiniCss.loader, 'css-loader', 'sass-loader', 'postcss-loader']
    },
    {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 1024,
                name: 'assets/[contenthash].[ext]',
                // publicPath: 'dist/'
            }
        }],
    },
]

module.exports = rules