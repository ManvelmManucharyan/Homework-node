const Util = require('./util/util');
const constants = require('./util/constants');

const array = ['Mariam', 'Karen', 'Armen', 'Vardan', 'Karine'];

Util.writeFile(constants.TEXT_PATH, array);
const result = Util.sortArray(Util.readFile(constants.TEXT_PATH));
console.log(result);