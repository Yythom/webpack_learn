const path = require('path');
const fs = require('fs')

// fs.writeFileSync(path.join(__dirname, '02.txt'), '12312312',)

fs.rmdirSync(path.join(__dirname, '../dist'))