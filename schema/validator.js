// Node.js require:
const Ajv = require("ajv").default

const schema = require('./tutorial.json');
const data = require('../tutorial/.tutorial/tutorial0.tut.json');

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)