// ---- proxy example 2 -----
//target object
let person = {
    name : 'Anu',
    role : "MLA"
}

//handler
let seceratary = {
    get : (target, field) => {
        return 'Mr. ' + target[field]
    },
    set : (target, field, value) => {
        target[field] = value.split("").join(".")
        return true
    }
}

let sreeshma = new Proxy(person, seceratary)

console.log(sreeshma.name) //anu
console.log(sreeshma.role) //mla

sreeshma.role = "IAS"
sreeshma.office = "TVM"

console.log(sreeshma.name) //Mr. anu
console.log(sreeshma.role) //I.A.S

console.log(person)