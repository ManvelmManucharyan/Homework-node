const path = require('path');

const constants = {
    TEXT_PATH : path.join(path.resolve(), '/homework 2/result.txt'),
    ENCODING : 'utf-8'
};

Object.freeze(constants);

module.exports = constants;