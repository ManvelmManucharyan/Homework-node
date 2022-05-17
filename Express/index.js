const express = require('express');
const app = express();

app.use((req, res, next)=>{
    next();
});

app.get('/',(req, res)=>{
    res.send('Hello World');
});

app.get('/contact', (req,res)=>{
    res.send("Contact");
});


app.listen(3000);