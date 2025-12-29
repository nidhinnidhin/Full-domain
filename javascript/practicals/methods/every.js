// Every is used for checking all the values satisying the condition if any value dont 
// satisfy the condition then it return false;

let arr = [2,4,6];

let res = arr.every((ele) => ele % 2 == 0)

console.log(res)