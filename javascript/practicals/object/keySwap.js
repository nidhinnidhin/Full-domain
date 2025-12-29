let obj = {
    name: 'user',
    age: null,
    place: null,
    city: 'sfsfd'
}

let temp_obj = {};

for(let vals in obj){
    if(obj[vals] !== null){
        temp_obj[obj[vals]] = vals
    }
}

console.log(temp_obj)
