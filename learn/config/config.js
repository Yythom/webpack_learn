// 开启devServer
const mode = process.env.NODE_ENV ?? 'production';
const HOST = process.env.HOST || 'localhost';
const serverConfig = {
    host: HOST,
    port: '8888',
};
const entry = './src/index.js'
const devtool = process.env.NODE_ENV ? 'inline-source-map' : 'none'
module.exports = {
    serverConfig,
    entry,
    devtool,
    mode
}