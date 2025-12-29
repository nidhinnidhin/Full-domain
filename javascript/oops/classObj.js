class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    
    print(){
        console.log(`The name is ${this.name} the age is ${this.age}`)
    }
}

let p1 = new Person('user1', 22);
p1.print()