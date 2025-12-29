let {execFile} = require('child_process');


execFile('node', ['-v'],(err, stdout, stderr) => {
    if(err){
        throw new err
    }
    console.log(stdout)
})