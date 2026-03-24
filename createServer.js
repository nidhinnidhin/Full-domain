const express = require('express');
const app = express();
const fs = require('fs')

app.get('/', (req, res) => {
    let q = req.query
    // console.log(q.name)
    fs.writeFile('index.tx',q.name, (err) => {

    })
})

app.listen(3003, () => {
    console.log('server runing')
})