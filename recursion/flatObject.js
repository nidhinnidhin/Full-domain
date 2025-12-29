let obj = { name: "hari", age: 44, city: { place: "tvm" } }



let temp = {}; 

flat(obj)

function flat(obj){
    for(let k in obj){
        if(typeof(obj[k]) !== 'object'){
            temp[k] = obj[k];

        }else if(typeof obj[k] === 'object'){
             flat(obj[k])
        }
    }
}

console.log(temp);