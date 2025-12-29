// class Person{
//     constructor(name, age){
//         this._name = name,
//         this._age = age
//     }

//     set name(newName){
//         this._name = newName
//     }

//     get name(){
//         return this._name;
//     }
// }

// let p = new Person('Nidhin',22);
// p.name = 'user'
// console.log(p.name)




// Using function

function createPerson(name, age) {
  return {
    _name: name,
    _age: age,

    get name() {
      return this._name;
    },

    set name(value) {
      this._name = value.trim();
    },

    get age() {
      return this._age;
    },

    set age(value) {
      this._age = value;
    }
  };
}

const person = createPerson('Nidhin', 22);

console.log(person.name); 
person.name = 'user';
console.log(person.name);

person.age = 30;
console.log(person.age); 
