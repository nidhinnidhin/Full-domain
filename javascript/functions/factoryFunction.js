function factory(name, age){
    return {
        name,
        age,
        print(){
            console.log(`The name is ${name} age is ${age}`)
        }
    }
}

let f1 = factory('user1', 22);
let f2 = factory('user2', 33)
f1.print()
f2.print()