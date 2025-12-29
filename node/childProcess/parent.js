const {fork} = require('child_process');

const child = fork('./child.js');

child.send({ greeting: 'Hello world' });

child.on('message', (msg) => {
    console.log('Message from child: ', msg);
})