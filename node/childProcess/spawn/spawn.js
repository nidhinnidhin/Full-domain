const {spawn} = require('child_process');

let child = spawn('py', ['script.py']);

child.stdout.on('data', (data) => {
    console.log(`Output: ${data}`)
})

