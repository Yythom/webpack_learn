const module_common = require("./common")
const prod_module_dev = require("./dev")
const prod_module_prod = require("./prod")
const rules = require("./rules")

const other = process.env.NODE_ENV ? prod_module_dev : prod_module_prod;
const pro_module = {
    ...module_common,
    rules: rules,
    ...other
}

module.exports = pro_module
