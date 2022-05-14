const {readFile, writeFile, sortArray} = require('./util/util');
const constants = require('./util/constants');

const array = ['Mariam', 'Karen', 'Armen', 'Vardan', 'Karine'];

writeFile(constants.TEXT_PATH, array);