const { webpack } = require('webpack');
const config = require('../webpack.config');

function build() {
    console.clear()
    console.log('Creating an optimized production build...');
    const compiler = webpack(config);
    compiler.run((err, stats) => {
        if (err) {
            if (!err.message) {
                // console.log(err);
            }
        }
    })

}
build()