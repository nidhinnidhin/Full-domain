// //target object
// let person = {
//     name : 'Anu',
//     role : "MLA"
// }

// //handler
// let seceratary = {
//     get : (target, field) => {
//         return 'Mr. ' + target[field]
//     },
//     set : (target, field, value) => {
//         target[field] = value.split("").join(".")
//         return true
//     }
// }


// let sreeshma = new Proxy(person, seceratary)

// console.log(sreeshma.name) //anu
// console.log(sreeshma.role) //mla

// sreeshma.role = "IAS"
// sreeshma.office = "TVM"

// console.log(sreeshma.name) //Mr. anu
// console.log(sreeshma.role) //I.A.S

// console.log(person)



let obj = {
    name: 'user',
    role: 'user'
}

let helper = {
    get(target, key){
        return target[key]
    },
    set(target, key, value){       
        target[key] = value
    }
}

let val = new Proxy(obj, helper);
val['place'] = 'TVM';
 
console.log(val)