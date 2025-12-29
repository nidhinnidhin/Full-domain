class hastable{
    constructor(size = 10){
        this.table  = new Array(size)
    }

    hash(key){
        let total = 0;
        for(let i = 0 ; i < key.length ; i++){
            total += key.charCodeAt(i)
        }
        return total % this.table.length
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        let index = this.hash(key)
       return this.table[index] 
    }
    remove(key){
        let index = this.hash(key)
         return this.table[index] = undefined
    }
    print(){
        for(let i = 0 ; i < this.table.length ; i++){
            if(this.table[i] !== undefined){
                console.log(i,this.table[i])
            }
        }
    }
}
const b = new hastable()
b.set("anu", "hall");
b.set("fg", "4");
console.log(b.get('anu'))
b.print()