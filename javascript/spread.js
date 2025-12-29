// Copying arrays

// const arr = [1, 2, 3];
// const copy = [...arr]; // [1, 2, 3]

// Merging arrays

// const a = [1, 2];
// const b = [3, 4];
// const merged = [...a, ...b]; // [1, 2, 3, 4]

// Adding elements

// let arr = [2,3,4,5]
// let added = [1,...arr,6];
// console.log(added)

// Array to function arguments

// function sum(a, b, c) {
//   return a + b + c;
// }

// const nums = [1, 2, 3];
// sum(...nums); // 6

// Spread in Objects

// const obj = { a: 1, b: 2 };
// const clone = { ...obj }; // { a: 1, b: 2 }

// Overwriting properties

// const obj = { a: 1, b: 2 };
// const updated = { ...obj, b: 10 }; // { a: 1, b: 10 }

// Spread with strings

let str = "Hello";
let spr = [...str];
let res = ''
for(let i = spr.length-1; i >= 0; i--){
    if(i === spr.length-1){
        res += spr[i].toUpperCase()
    }
    else if(i === 0){
        res += spr[i].toLowerCase()
    }
    else{
        res += spr[i];
    }
}

console.log(res)
