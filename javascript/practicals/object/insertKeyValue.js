// Insert key values to object with loop

// let obj = {};
// let arr = [34,45,4,54,3,43,42,34,234];


// for(let i = 0; i < arr.length; i++){
//     obj[i] = arr[i]
// }

// console.log(obj)

// find Freequency 

// let arr = [1,2,23,23,2,3,212,21,12,212];
// let freeq = {};

// for(let val of arr){
//     freeq[val] = (freeq[val] || 0) +1
// }

// console.log(freeq)

const datas = [
  { tags: ['js', 'react'] },
  { tags: ['js', 'node'] },
  { tags: ['css', 'react'] },
  { tags: ['js', 'css', 'node'] }
];

let obj = {}
for(let i = 0; i < datas.length; i++){
    obj[i] = datas[i].tags.length
}

console.log(obj)
