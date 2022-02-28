const { webpack } = require('webpack');
const formatWebpackMessages = require('webpack-format-messages');
// const chalk = require('chalk');
const D = require('webpack-dev-server');
const openBrowser = require('openbrowser');
const config = require('../webpack.config');
const { serverConfig } = require('../config');

function build() {
    console.clear();
    console.log('start...');
    const compiler = webpack(config);

    const devServer = new D(serverConfig, compiler);
    devServer.startCallback(() => {
        console.log('Starting the development server...\n');
        openBrowser(`http://${serverConfig.host}:${serverConfig.port}`);
    });
}
build();
