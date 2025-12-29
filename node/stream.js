const fs = require('fs');
const readStream = fs.createReadStream('example.txt', 'utf-8');

readStream.on('data', (chunk) => {
    console.log('-----New Chunk------');
    console.log(chunk); 
});

readStream.on('end', () => {
    console.log('Finished writing to file');
})

