const fs = require('fs');

fs.unlink('index.txt', ()=> {
    console.log('Deleted')
})