const {Transform} = require('stream');

const transform = new Transform({
    transform(chunk, encoding, callback) {
        const upperCase = chunk.toString().toUpperCase();
        this.push(upperCase);
        callback();
    }
})

transform.write('Hello ')
transform.write('World ')
transform.end();

transform.on('data', (chunk) => {
    console.log(`Transformed output: ${chunk.toString()}`);
})

transform.on('end', () => {
    console.log('Transformation complete.')
})