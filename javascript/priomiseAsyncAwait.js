function prom(){
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Resolved');
        }
        else{
            reject('Rejected');
        }
    })
}


async function resolvePromise(){
    try{
        let res = await prom();
        console.log(res)
    }
    catch(err){
        console.log(err);
    }
}

resolvePromise()