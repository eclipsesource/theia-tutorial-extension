import {compileFromFile} from 'json-schema-to-typescript';
const fs = require('fs');

// compile from file
compileFromFile('tutorial.json')
    .then(ts => fs.writeFileSync('tutorial.d.ts', ts));