const express = require('express');
const app = express();


app.use((req, res, next) => {
    if(!req.headers["x-api-key"]){
        return res.status(400).json({error: 'Missing x-api-key'})
    }

    next();
})

app.get('/', (req, res) => {
    res.send("Request passed the header check")
})


app.listen(3000, () => console.log('Server started'));