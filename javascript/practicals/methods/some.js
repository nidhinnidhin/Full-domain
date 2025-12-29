// Some is an higher order function that return try any of the value satisfy 
// the given condition. if no value satisfy the condition the it return false

let arr = [1,2,23,3,34,4,445];

let res = arr.some((ele) => ele % 2 === 0);

console.log(res)