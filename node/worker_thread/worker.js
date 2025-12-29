const {parentPort} = require('worker_threads')

let result = 0;

for(let i = 1; i <= 10; i++){
    result += i;
}

parentPort.postMessage(`Sum is ${result}`);
