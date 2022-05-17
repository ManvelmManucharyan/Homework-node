const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

app.post('/create', (req, res)=>{
    fs.writeFileSync('./users.json', JSON.stringify(req.body));
    res.status(201).send('Created');
});

app.get('/users', (req,res)=>{
    const data = fs.readFileSync('./users.json', 'utf-8');
    res.send(data);
});

app.listen(3000);