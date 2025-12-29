const {Writable} = require('stream');

const writable = new Writable({
    write(chunk, encoding, callback){
        console.log(`writing: ${chunk.toString()}`);
        callback()
    }
})

writable.write('Helloo')
writable.write('Writable stream');
writable.end(() => console.log('Writing finished'))