const fs = require('fs');

const readable = fs.createReadStream('input.mp4');

const writable = fs.createWriteStream('output.mp4');

readable.pipe(writable);

writable.on('finish', () => {
    console.log('Media file copies successfully');
})