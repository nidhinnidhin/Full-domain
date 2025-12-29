const {Worker} = require('worker_threads');
const worker = new Worker('./worker.js');

worker.on('message', (msg) => {
    console.log('Message from worker:', msg);
});

worker.on('error', (err) => {
    console.error('Error happened ', err);
})

worker.on('exit', (code) => {
    console.log('Worker exited with code ', code);
})         