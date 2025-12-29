// Endpoints

const express = require('express');
const app = express();
const fs = require('fs')
const http = require('http')

app.get('/create', (req, res) => {
    fs.writeFile('index.txt', 'dataasasdasd', (err) => {
        if(err) throw err;
        console.log('File created');
    })
    res.send('Wrote')
})

app.get('/read', (req, res) => {
    fs.readFile('index.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        console.log('File data: ', data);
        res.send(data)
    })
})

app.get('/path/:id', (req, res) => {
    let item = req.params.id;
    res.send(`The id is ${item}`)
})

app.get('/query', (req, res) => {
    let {num1, num2} = req.query;
    let sum = Number(num1) + Number(num2)
    res.send(sum.toString())
})
 
app.listen(3000, () => console.log('Server started on port 3000'))