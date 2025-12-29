const {Readable} = require('stream');

const readable = new Readable({
    read() {
        this.push('Hello');
        this.push('World');
        this.push(null);
    }
});

readable.on('data', (chunk) => {
    console.log(`Received chunk: ${chunk.toString()}`)
})

readable.on('end', () => {
    console.log('No more data')
})
