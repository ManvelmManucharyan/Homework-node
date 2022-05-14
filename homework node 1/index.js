const http = require('http');
const path = require('path');
const util = require('util');
const fs = require('fs');
const func = require('./util');

// const server = http.createServer((req,res)=>{
//     res.end('Hello world');
// });

// server.listen(3000,null,()=>{
//     console.log(`http://127.0.0.1:3000`);
// });

const currentPath = path.resolve();

const textPath = path.join(currentPath, '/homework node 1/text.txt');
const resultText = path.join(currentPath, '/homework node 1/result.txt');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(textPath, 'utf-8').then((text)=>{
    return text.replaceAll(',', '').split(' ');
}).then((text)=>{
    return func.sortArr(text);
}).then((text)=>{
    writeFile(resultText, text.join(', '));
});