const {fork} = require('child_process');

let child = fork('child.js');


child.send({task: 'calculate', number: 3});

child.on('message', (msg) => {
    console.log('message from child: ', msg);
})