const users = ['nidhin', 'rahul', 'nidheesh', 'ram'];


function checkUserExists(username){
    return new Promise((resolve, reject) => {
        console.log('Checking user');
        setTimeout(() => {
            if(users.includes(username)){
                resolve('User exist...');
            }
            else{
                reject('User dosnt exist');
            }
        }, 1000)
    })
}

checkUserExists('sdf')
    .then((mes) => console.log(mes))
    .catch((err) => console.log(err))