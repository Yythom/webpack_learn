const path = require('path');
const { entry, devtool, mode } = require('./config');
const pro_module = require('./modules');
const pro_plugins = require('./plugins');
const CssMiniMain = require('css-minimizer-webpack-plugin');

module.exports = {
    entry,
    mode,
    devtool,
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        clean: true,
        assetModuleFilename: 'assets/[contenthash][ext]'
    },
    plugins: [
        ...pro_plugins
    ],
    module: {
        ...pro_module
    },
    optimization: {
        minimizer: [
            new CssMiniMain()
        ]
    }
}