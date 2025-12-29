class Parent{
    constructor(cash){
        this.cash = cash
    }
}
class Child extends Parent{
    print(){
        console.log(`I have ${this.cash}`)
    }
}
let c1 = new Child(100);
c1.print()