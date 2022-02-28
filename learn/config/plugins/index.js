const plugin_common = require('./common');
const plugin_dev = require('./dev');
const plugin_prod = require('./prod');

const other = process.env.NODE_ENV ? plugin_dev : plugin_prod;
const pro_plugins = [
    ...plugin_common,
    ...other,
];

module.exports = pro_plugins;
