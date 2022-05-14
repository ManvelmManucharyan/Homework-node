const {readFile, writeFile, sortArray} = require('./util/util');
const constants = require('./util/constants');

const array = ['Mariam', 'Karen', 'Armen', 'Vardan', 'Karine'];

writeFile(constants.TEXT_PATH, array);

const text = readFile(constants.TEXT_PATH);

const result = sortArray(text);
console.log(result);