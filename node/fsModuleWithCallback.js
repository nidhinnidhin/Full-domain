const fs = require('fs');


// Write file
fs.writeFile('index.txt', 'data', (err) => {
    if(err){
        throw err;
    }
    console.log('File created')
})

// Read data from the file
fs.readFile('index.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log('The data is :', data)
})

// Append data
fs.appendFile('index.txt', '\nAppended data', (err) => {
    if(err) throw err;
    console.log('Content appended')
})

// Delete file
fs.unlink('index.txt', (err) => {
    if(err) throw err;
    console.log('Deleted file successfully')
})
