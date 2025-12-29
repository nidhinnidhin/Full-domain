function Person(name, age){
    this.name = name
    this.age = age

    this.getData = function(){
        console.log(`Name is ${this.name} age is ${this.age}`)
    }
}

let p = new Person('Nidhin', 22)
p.getData()
let p1 = new Person('user', 33)
p1.getData()