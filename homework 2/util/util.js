const fs = require('fs');

function readFile (filePath, encoding = 'utf-8'){
    try{
        if(fs.existsSync(filePath)){
            return fs.readFileSync(filePath, encoding);
        }
    } catch(error) {
        throw new Error (error.message);
    }
}

function writeFile (filePath, data, encoding = 'utf-8'){
    for (let i = 0; index < data.length; i++) {
        fs.appendFileSync(filePath, `${data[i]}, `, encoding);
    }
}

function sortArray (str){
    return str.replaceAll(', ', ' ').join(' ');
}

module.exports = {writeFile, readFile, sortArray};