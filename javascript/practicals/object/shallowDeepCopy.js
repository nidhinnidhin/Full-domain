// Shallow copy

// let obj = {
//     name: 'user',
//     age: 20,
//     address: {
//         place: 'tvm',
//         city: 'Trivandrum'
//     }
// }

// let copy = {...obj};

// copy.address.place = 'Gudlur'

// console.log(copy) 
// console.log(obj) 

// Deep copy

let obj = {
    name: 'user',
    age: 20,
    address: {
        place: 'tvm',
        city: 'Trivandrum'
    }
}

let copy = JSON.parse(JSON.stringify(obj));

copy.address.place = 'Gudalur'

console.log(copy)
console.log(obj)