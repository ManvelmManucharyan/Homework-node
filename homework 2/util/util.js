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
    for (let i = 0; i < data.length; i++) {
        if(i === data.length - 1){
            fs.appendFileSync(filePath, `${data[i]}`, encoding);
        }else {
            fs.appendFileSync(filePath, `${data[i]}, `, encoding);
        }
    }
}

function sortArray (str){
    return str.replaceAll(', ', ' ').split(' ').sort();
}

module.exports = {writeFile, readFile, sortArray};