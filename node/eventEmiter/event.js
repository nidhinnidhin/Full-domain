const EventEmiter = require('events');

const emitter = new EventEmiter();

emitter.on('greet', (name) => {
    console.log(`Hello, ${name}`)
})

emitter.emit('greet', 'Nidhin')