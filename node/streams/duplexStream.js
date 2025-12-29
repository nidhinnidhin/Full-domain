const {Duplex} = require('stream');

const duplex = new Duplex({
    read(size){
        this.push('This is data from the duplex stream');
        this.push(null);
    },

    write(chunk, encoding, callback){
        console.log(`Recieved chunk: ${chunk.toString()}`)
        callback()
    }
})

duplex.write('Hello world');
duplex.end();

duplex.on('data', (chunk) => {
    console.log(`Reading: ${chunk.toString()}`);
})

duplex.on('end', () => {
    console.log('No more data to read or write')
})