const fs = require('fs');

let promise = new Promise((resolve, reject) => {
    let status = false;
    if(status){
        fs.writeFile('index.txt','data' ,(err) => {
            if(err) throw err;
            resolve('File created')
        })
    }
    else{
        fs.unlink('index.txt', (err) => {
            if(err) throw err;
            reject('Deleted file')
        })
    }
})

promise.then(res => 
    console.log(res)
)
.catch(err => 
    console.log(err)
)