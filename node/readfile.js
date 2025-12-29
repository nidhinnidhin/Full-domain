const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, data) => {
    if(err){
        console.err('Something happened', err);
        return;
    }
    console.log('file readed', data)
})