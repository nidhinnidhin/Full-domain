class Bank{
    #balance = 0;
    
    deposit(amount){
        this.#balance += amount;
    }
    
    getBalance(){
        return this.#balance
    }
}

let acc = new Bank();
acc.deposit(100);

console.log(acc.getBalance())